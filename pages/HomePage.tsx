
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRANDS, BRAND_LOGOS, CARS } from '../constants';
import UnifiedForm from '../components/UnifiedForm';
import UsedCarQuoter from '../components/UsedCarQuoter';

const HomePage: React.FC = () => {
  const [showQuoter, setShowQuoter] = useState(false);
  const featuredCars = CARS.slice(0, 3);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-900 rounded-bl-[100px] -z-10 translate-x-20 -rotate-2 scale-110"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Bienvenido a TuAuto Ya
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                TU PRÓXIMO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">VIAJE</span> EN CUOTAS<br />
                AQUÍ.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                Accedé a la mejor selección de vehículos 0km con <span className="text-indigo-600 font-bold">financiación a medida y cuotas bajas</span>. Atención personalizada en todo el proceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/catalogo" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-100 transition-all hover:-translate-y-1">
                  Explorar Catálogo
                </Link>
                <button 
                  onClick={() => setShowQuoter(true)}
                  className="bg-white border-2 border-slate-100 hover:border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Cotizá tu Usado
                </button>
              </div>
            </div>

            <div className="relative animate-in fade-in zoom-in duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                alt="TuAuto Ya" 
                className="w-full h-auto rounded-[40px] shadow-3xl object-cover aspect-[4/5] lg:aspect-auto"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <p className="font-bold text-slate-800">Cuotas bajas en pesos</p>
                </div>
                <p className="text-sm text-slate-500">Manejamos los mejores planes de ahorro y financiación directa con tasas preferenciales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Used Car Quoter Modal */}
      {showQuoter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl">
            <button 
              onClick={() => setShowQuoter(false)}
              className="absolute -top-12 right-0 text-white hover:text-indigo-400 font-bold flex items-center gap-2"
            >
              Cerrar <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <UsedCarQuoter />
          </div>
        </div>
      )}

      {/* Brands Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-black text-slate-900 uppercase">Marcas Oficiales</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Seleccioná la marca de tu interés para conocer todos los modelos disponibles, planes de ahorro y beneficios exclusivos.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {BRANDS.map(brand => (
            <Link 
              key={brand} 
              to={`/brand/${brand.toLowerCase()}`}
              className="group bg-white p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center gap-6 hover:-translate-y-2"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl group-hover:scale-110 transition-transform p-2">
                <img 
                  src={BRAND_LOGOS[brand]} 
                  alt={brand} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <span className="font-bold text-slate-800 uppercase tracking-widest text-sm">{brand}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Models */}
      <section className="bg-slate-900 py-32 rounded-[100px] mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">MODELOS DESTACADOS</h2>
              <p className="text-slate-400 max-w-xl">Descubrí las unidades más buscadas con las cuotas más bajas del mercado.</p>
            </div>
            <Link to="/catalogo" className="text-indigo-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Ver catálogo completo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCars.map(car => (
              <div key={car.id} className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-[40px] overflow-hidden transition-all hover:border-indigo-500/50">
                <div className="relative h-64 overflow-hidden">
                  <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">Financiación a medida</div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">{car.brand}</p>
                      <h3 className="text-2xl font-black text-white">{car.model}</h3>
                    </div>
                    <p className="text-slate-400 text-sm font-bold">{car.year}</p>
                  </div>
                  <div className="space-y-2">
                    {car.features.slice(0, 2).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-slate-700 flex justify-between items-center">
                    <span className="text-white font-bold text-xl">${car.price.toLocaleString('es-AR')}</span>
                    <Link to="/contacto" className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-slate-900 leading-tight uppercase">ARMÁ TU PLAN HOY MISMO.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Completá el formulario y un asesor de TuAuto Ya te contactará para diseñarte un plan de pago con <span className="text-indigo-600 font-bold">cuotas bajas</span> que se ajuste 100% a tus posibilidades.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <p className="text-3xl font-black text-indigo-600 mb-1">Mínimo</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Anticipo</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <p className="text-3xl font-black text-indigo-600 mb-1">Hasta 84</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Cuotas bajas</p>
              </div>
            </div>
          </div>
          <UnifiedForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
