
import React, { useState, useMemo } from 'react';
import { USED_CARS } from '../constants';
import { Link } from 'react-router-dom';

const UsedCarsPage: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = useMemo(() => {
    return USED_CARS.filter(car => {
      const matchSegment = selectedSegment === 'Todos' || car.segment === selectedSegment;
      const matchSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSegment && matchSearch;
    });
  }, [selectedSegment, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">USADOS <span className="text-indigo-600">SELECCIONADOS</span></h1>
        <p className="text-slate-500">Unidades revisadas con garantía de confianza. Tomamos tu usado en parte de pago.</p>
      </div>

      <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
        <input 
          type="text" 
          placeholder="Buscar por marca o modelo..."
          className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          className="w-full md:w-64 px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
          value={selectedSegment}
          onChange={(e) => setSelectedSegment(e.target.value)}
        >
          <option value="Todos">Todos los segmentos</option>
          {['SUV', 'Sedán', 'Pickup', 'Hatchback'].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCars.map(car => (
          <div key={car.id} className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000'} />
              <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Usado Seleccionado</div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-indigo-600 text-xs font-black uppercase tracking-widest">{car.brand}</p>
                  <h3 className="text-2xl font-black text-slate-800 uppercase">{car.model}</h3>
                </div>
                <span className="text-slate-400 font-bold">{car.year}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-500 text-xs font-bold bg-slate-50 px-3 py-1 rounded-full">{car.km?.toLocaleString()} KM</span>
                <span className="text-slate-500 text-xs font-bold bg-slate-50 px-3 py-1 rounded-full">{car.segment}</span>
              </div>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">${car.price.toLocaleString('es-AR')}</span>
                <Link to="/contacto" className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">Consultar</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsedCarsPage;
