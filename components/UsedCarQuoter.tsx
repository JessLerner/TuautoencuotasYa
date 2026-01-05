
import React, { useState } from 'react';
import { UsedQuote } from '../types';
import { storageService } from '../services/storageService';

const UsedCarQuoter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState<UsedQuote>({
    year: '',
    brand: '',
    model: '',
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleFinish = () => {
    if (!quote.name || !quote.email || !quote.phone) {
        alert("Por favor completa tus datos de contacto.");
        return;
    }

    setLoading(true);

    // Guardar en la Base de Datos Local
    storageService.saveLead({
      type: 'Tasación Usado',
      name: quote.name,
      email: quote.email,
      phone: quote.phone,
      vehicleDetails: `${quote.brand} ${quote.model} (${quote.year})`
    });
    
    setTimeout(() => {
      const whatsappBaseUrl = "https://wa.me/541136582755";
      const message = `Hola! Soy ${quote.name}. Me gustaría entregar mi ${quote.brand} ${quote.model} año ${quote.year} como parte de pago. Aquí adjunto las fotos de mi unidad para que me brinden un precio estimado de toma.`;
      const encodedMessage = encodeURIComponent(message);
      
      window.open(`${whatsappBaseUrl}?text=${encodedMessage}`, '_blank');
      setLoading(false);
      setStep(4);
    }, 1200);
  };

  const isStep1Valid = quote.year !== '';
  const isStep2Valid = quote.brand.trim() !== '' && quote.model.trim() !== '';
  const isStep3Valid = quote.name.trim().length > 3 && quote.email.includes('@') && quote.phone.trim().length > 7;

  return (
    <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden max-w-xl mx-auto">
      <div className="bg-slate-900 p-8 text-white">
        <h3 className="text-2xl font-black uppercase italic">Tasación Oficial</h3>
        <p className="text-slate-400 text-sm">Obtené el mejor valor de toma del mercado.</p>
      </div>
      
      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">1</span>
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Año</span>
            </div>
            <select className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 font-medium" value={quote.year} onChange={(e) => setQuote({...quote, year: e.target.value})}>
              <option value="">Seleccionar año</option>
              {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <button disabled={!isStep1Valid} onClick={() => setStep(2)} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 disabled:opacity-50">Siguiente</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">2</span>
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Vehículo</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Marca" value={quote.brand} onChange={(e) => setQuote({...quote, brand: e.target.value})} />
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Modelo" value={quote.model} onChange={(e) => setQuote({...quote, model: e.target.value})} />
            </div>
            <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold">Atrás</button>
                <button disabled={!isStep2Valid} onClick={() => setStep(3)} className="flex-[2] bg-indigo-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">Siguiente</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">3</span>
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Contacto</span>
            </div>
            <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu Nombre" value={quote.name} onChange={(e) => setQuote({...quote, name: e.target.value})} />
            <input type="email" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu Email" value={quote.email} onChange={(e) => setQuote({...quote, email: e.target.value})} />
            <input type="tel" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu WhatsApp" value={quote.phone} onChange={(e) => setQuote({...quote, phone: e.target.value})} />
            <button disabled={!isStep3Valid || loading} onClick={handleFinish} className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-green-600 flex justify-center items-center gap-2">
              {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Tasación por WhatsApp"}
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center space-y-6 animate-in zoom-in duration-300 py-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">¡LISTO!</h2>
            <p className="text-slate-500 text-sm">Recordá enviar las fotos del exterior, interior y kilometraje al chat que se abrió para completar la tasación.</p>
            <button onClick={() => setStep(1)} className="text-indigo-600 font-bold uppercase text-[10px] tracking-widest hover:underline">Cotizar otro</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsedCarQuoter;
