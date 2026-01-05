
import React, { useState } from 'react';
import { BRANDS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/pre.aprobadosargentina/', color: 'hover:text-blue-600', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4.63h3v12h5v-12h3.85l.42-4.63z"/></svg> },
    { name: 'Instagram', url: 'https://www.instagram.com/tu0kmencuotasya/', color: 'hover:text-pink-600', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { name: 'WhatsApp', url: 'https://wa.me/541136582755?text=Hola%20TuAutoYa,%20quiero%20mas%20info%20sobre...', color: 'hover:text-green-500', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  ];

  if (location.pathname === '/admin') return children;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-100">
                <span className="text-white font-black text-xl italic">T</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase">TuAuto <span className="text-indigo-600">Ya</span></span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Inicio</Link>
              <Link to="/catalogo" className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/catalogo' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>0KM</Link>
              <Link to="/usados" className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/usados' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Usados</Link>
              <Link to="/contacto" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-100">Consultar</Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-400 ${link.color} transition-all hover:scale-110 border border-gray-50`} title={link.name}>
            {link.icon}
          </a>
        ))}
      </div>

      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-lg">T</span></div>
                <span className="text-xl font-black uppercase">TuAuto Ya</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">Concesionaria líder en financiación premium. El mejor asesoramiento para tu próximo auto.</p>
              <div className="flex gap-4">
                {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" className="text-slate-400 hover:text-white transition-colors">{link.icon}</a>)}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Categorías</h4>
              <ul className="space-y-4 text-slate-400 text-sm uppercase font-bold tracking-widest text-[10px]">
                <li><Link to="/catalogo" className="hover:text-indigo-400">0KM 2026</Link></li>
                <li><Link to="/usados" className="hover:text-indigo-400">Usados Seleccionados</Link></li>
                <li><Link to="/contacto" className="hover:text-indigo-400">Planes de Pago</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Soporte</h4>
              <ul className="space-y-4 text-slate-400 text-sm uppercase font-bold tracking-widest text-[10px]">
                <li><Link to="/contacto" className="hover:text-indigo-400">Consultas</Link></li>
                <li><Link to="/admin" className="hover:text-red-400 text-slate-800">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contacto</h4>
              <p className="text-slate-400 text-sm">CABA, Buenos Aires, Argentina.</p>
              <p className="text-indigo-400 font-black mt-2">+54 11 3658-2755</p>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-[10px] uppercase tracking-widest">
            © 2024 TUAUTO YA - LA MEJOR EXPERIENCIA EN COMPRA DE VEHÍCULOS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
