
import React, { useState, useMemo } from 'react';
import { CARS, BRANDS } from '../constants';
import { Brand } from '../types';
import { Link } from 'react-router-dom';

const CatalogPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | 'Todas'>('Todas');
  const [selectedSegment, setSelectedSegment] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchBrand = selectedBrand === 'Todas' || car.brand === selectedBrand;
      const matchSegment = selectedSegment === 'Todos' || car.segment === selectedSegment;
      const matchSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchSegment && matchSearch;
    });
  }, [selectedBrand, selectedSegment, searchQuery]);

  const segments = ['Todos', 'SUV', 'Hatchback', 'Pickup', 'Sedán', 'Utilitario'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">NUESTRO <span className="text-indigo-600">STOCK</span></h1>
        <p className="text-slate-500">Filtrá y encontrá el vehículo que mejor se adapte a tus necesidades. Financiación 100% personalizada.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-end">
        <div className="flex-1 space-y-2 w-full">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Buscar modelo</label>
          <input 
            type="text" 
            placeholder="Ej: Cronos, Duster, 208..."
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-64 space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Marca</label>
          <select 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value as any)}
          >
            <option value="Todas">Todas las marcas</option>
            {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div className="w-full md:w-64 space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Tipo</label>
          <select 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
          >
            {segments.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCars.map(car => (
          <div key={car.id} className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-indigo-600/90 backdrop-blur px-4 py-2 rounded-full font-bold text-white text-[10px] uppercase tracking-widest shadow-xl">Financiación a medida</div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-1">{car.brand}</p>
                <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{car.model}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {car.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500 text-xs">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                    {f}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Valor aprox.</p>
                  <span className="text-2xl font-black text-slate-900">${car.price.toLocaleString('es-AR')}</span>
                </div>
                <Link to="/contacto" className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-100">Simular cuota</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
