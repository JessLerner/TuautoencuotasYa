
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import UsedCarsPage from './pages/UsedCarsPage';
import BrandPage from './pages/BrandPage';
import AdminDashboard from './pages/AdminDashboard';
import UnifiedForm from './components/UnifiedForm';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/usados" element={<UsedCarsPage />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/contacto" element={
            <div className="max-w-2xl mx-auto py-20 px-4">
              <h1 className="text-4xl font-black text-slate-900 mb-4 text-center uppercase tracking-tighter">CONTACTANOS</h1>
              <p className="text-slate-500 mb-12 text-center">Un asesor oficial se comunicará con vos en minutos.</p>
              <UnifiedForm />
            </div>
          } />
        </Routes>
        <Chatbot />
      </Layout>
    </HashRouter>
  );
};

export default App;
