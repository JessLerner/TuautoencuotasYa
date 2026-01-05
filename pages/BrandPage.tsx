
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS, BRANDS } from '../constants';
import UnifiedForm from '../components/UnifiedForm';

const BrandPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const brand = BRANDS.find(b => b.toLowerCase() === brandName?.toLowerCase()) || BRANDS[0];
  const brandCars = CARS.filter(c => c.brand === brand);

  return (
    <div className="space-y-32 pb-32">
      {/* Brand Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 text-[30rem] font-black text-indigo-500/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none uppercase italic">
          {brand}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-indigo-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                Marca Oficial
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">
                {brand}<span className="text-indigo-600">.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                Descubrí toda la gama de {brand} que tenemos disponible. Calidad, innovación y el respaldo de TuAuto Ya para que te lleves tu 0km hoy mismo.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center gap-4">
               <div className="w-32 h-32 bg-slate-50 rounded-3xl flex items-center justify-center">
                  <span className="text-6xl font-black text-slate-200 uppercase italic">{brand[0]}</span>
               </div>
               <p className="text-center font-bold text-slate-800 uppercase tracking-widest text-sm">Distribuidor Autorizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase">Gama {brand}</h2>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {brandCars.map(car => (
            <div key={car.id} className="group bg-white rounded-[50px] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="lg:w-3/5 p-10 space-y-6 flex flex-col justify-center">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{car.model}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest">{car.segment}</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest">{car.year}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{car.description}</p>
                <div className="space-y-2">
                  {car.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">${car.price.toLocaleString('es-AR')}</span>
                  <Link to="/contacto" className="text-indigo-600 font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">Consultar →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Specific Contact */}
      <section className="bg-slate-950 py-32 rounded-[100px] mx-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter">¿LISTO PARA TU <span className="text-indigo-400">{brand}</span>?</h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Dejanos tus datos y un especialista de {brand} te ayudará a encontrar el plan perfecto para vos.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Garantía Oficial</p>
                    <p className="text-sm text-slate-400">3 años o 100.000km.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Entrega Ágil</p>
                    <p className="text-sm text-slate-400">Stock físico real en sucursal.</p>
                  </div>
                </div>
              </div>
            </div>
            <UnifiedForm initialBrand={brand} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
