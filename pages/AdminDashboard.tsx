
import React, { useState, useEffect } from 'react';
import { Lead } from '../types';
import { storageService } from '../services/storageService';

const AdminDashboard: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  
  // Estados para cambio de contraseña
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (isAuthorized) {
      setLeads(storageService.getLeads());
    }
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPwd = storageService.getAdminPassword();
    if (passwordInput === storedPwd) {
      setIsAuthorized(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ['Fecha', 'Tipo', 'Nombre', 'Email', 'Telefono', 'Interes', 'Observaciones', 'Detalles Vehiculo'];
    const csvRows = [
      headers.join(','),
      ...leads.map(lead => [
        `"${lead.timestamp}"`,
        `"${lead.type}"`,
        `"${lead.name}"`,
        `"${lead.email || ''}"`,
        `"${lead.phone}"`,
        `"${lead.interest || ''}"`,
        `"${(lead.observations || '').replace(/"/g, '""')}"`,
        `"${(lead.vehicleDetails || '').replace(/"/g, '""')}"`
      ].join(','))
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_tuauto_ya_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    storageService.setAdminPassword(newPassword);
    alert("Contraseña actualizada correctamente.");
    setShowPwdModal(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-md space-y-6 text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-white font-black text-2xl italic">T</div>
          <h1 className="text-2xl font-black uppercase tracking-tighter">Panel de Control</h1>
          <p className="text-slate-500 text-sm">Acceso exclusivo para administradores.</p>
          <input 
            type="password" 
            placeholder="Contraseña"
            className="w-full p-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-600"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all">Ingresar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 relative">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase">Gestión de Leads</h1>
            <p className="text-slate-500">Base de datos de clientes potenciales TuAuto Ya.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleExportCSV}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Exportar CSV
            </button>
            <button 
              onClick={() => setShowPwdModal(true)}
              className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
              Cambiar Pass
            </button>
            <button 
              onClick={() => { if(confirm("¿Estás seguro de que quieres borrar todos los datos?")) { storageService.clearLeads(); setLeads([]); } }} 
              className="text-red-500 font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2 px-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              Limpiar Base
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                  <th className="px-6 py-4 font-black">Fecha</th>
                  <th className="px-6 py-4 font-black">Tipo</th>
                  <th className="px-6 py-4 font-black">Cliente</th>
                  <th className="px-6 py-4 font-black">Contacto</th>
                  <th className="px-6 py-4 font-black">Interés</th>
                  <th className="px-6 py-4 font-black">Observaciones / Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-6 text-xs text-slate-500 font-medium">{lead.timestamp}</td>
                    <td className="px-6 py-6">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${lead.type === 'Tasación Usado' ? 'bg-yellow-100 text-yellow-700' : lead.type === 'Chatbot' ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'}`}>
                        {lead.type}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-bold text-slate-800">{lead.name}</td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col text-xs">
                        <span className="font-bold">{lead.phone}</span>
                        <span className="text-slate-400">{lead.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-indigo-600">{lead.interest}</td>
                    <td className="px-6 py-6 text-xs text-slate-500">
                      <p className="italic mb-1">{lead.observations || '-'}</p>
                      {lead.vehicleDetails && <p className="font-bold text-slate-700">Vehículo: {lead.vehicleDetails}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {leads.length === 0 && (
            <div className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest">Aún no hay leads registrados.</div>
          )}
        </div>
      </div>

      {/* Modal Cambio Contraseña */}
      {showPwdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-[40px] shadow-2xl w-full max-w-md space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-center">Cambiar Contraseña</h3>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <input 
                required
                type="password" 
                placeholder="Nueva Contraseña"
                className="w-full p-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-600"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input 
                required
                type="password" 
                placeholder="Confirmar Contraseña"
                className="w-full p-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-indigo-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowPwdModal(false)}
                  className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-indigo-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
