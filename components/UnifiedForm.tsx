
import React, { useState } from 'react';
import { FormData, Brand } from '../types';
import { BRANDS } from '../constants';
import { storageService } from '../services/storageService';

interface UnifiedFormProps {
  initialBrand?: Brand | 'General';
  onSuccess?: () => void;
}

const UnifiedForm: React.FC<UnifiedFormProps> = ({ initialBrand = 'General', onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    brandOfInterest: initialBrand,
    observations: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Persistir en Base de Datos Local
    storageService.saveLead({
      type: 'Consulta Web',
      name: formData.name,
      phone: formData.phone,
      interest: formData.brandOfInterest,
      observations: formData.observations
    });
    
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setLoading(false);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center animate-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Recibido!</h3>
        <p className="text-slate-600 mb-6">Un asesor se contactará con vos para brindarte la mejor financiación en cuotas bajas.</p>
        <button onClick={() => setSubmitted(false)} className="text-indigo-600 font-black uppercase text-xs tracking-widest hover:underline">Enviar otra consulta</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
      <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tighter">ASESORATE HOY</h3>
      
      <div className="space-y-4">
        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none" placeholder="Nombre Completo" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none" placeholder="WhatsApp (Ej: +54 9 11...)" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        
        <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none" value={formData.brandOfInterest} onChange={(e) => setFormData({...formData, brandOfInterest: e.target.value as any})}>
          <option value="General">Marca de interés</option>
          {BRANDS.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>

        <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none" placeholder="Observaciones..." value={formData.observations} onChange={(e) => setFormData({...formData, observations: e.target.value})} />
      </div>

      <button disabled={loading} type="submit" className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
        {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Enviar Consulta"}
      </button>
    </form>
  );
};

export default UnifiedForm;
