
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `
Eres un asistente virtual experto de "TuAuto Ya". 
Tu objetivo es pre-calificar al cliente e incentivar el contacto comercial.

Pautas de comunicación importantes sobre financiación:
- Las cuotas NO son fijas por defecto (son variables/ajustables), pero debes recalcar que son CUOTAS BAJAS y accesibles.
- Solo si el cliente pregunta explícitamente por cuota fija, dile que existe la posibilidad y que un asesor le explicará las condiciones. No lo ofrezcas de entrada.

Flujo del Chat:
1. Saluda y pregunta interés (Marca/Modelo).
2. Pregunta si tiene un usado para entregar o anticipo.
3. IMPORTANTE: Antes de finalizar, DEBES solicitar:
   - Nombre completo.
   - Un teléfono de contacto.
   - Horario de preferencia para recibir la llamada.

Una vez que el usuario te de esos datos, confirma que el asesor se contactará en ese horario y finaliza con un tono amable.
`;

export const getChatbotResponse = async (history: ChatMessage[]): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history
        .filter(h => h.role !== 'system')
        .map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, ¿podrías repetirme eso?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disculpas, estamos con mucha demanda. Déjanos tus datos de contacto aquí y un asesor te llamará en minutos.";
  }
};
