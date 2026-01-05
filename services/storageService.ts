
import { Lead } from '../types';

const STORAGE_KEY = 'tuauto_ya_leads_v1';
const PWD_KEY = 'tuauto_ya_admin_pwd';

export const storageService = {
  saveLead: (leadData: Omit<Lead, 'id' | 'timestamp'>) => {
    const leads = storageService.getLeads();
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleString('es-AR'),
    };
    const updatedLeads = [newLead, ...leads];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
    return newLead;
  },

  getLeads: (): Lead[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  clearLeads: () => {
    localStorage.removeItem(STORAGE_KEY);
  },

  getAdminPassword: (): string => {
    return localStorage.getItem(PWD_KEY) || 'admin123';
  },

  setAdminPassword: (newPwd: string) => {
    localStorage.setItem(PWD_KEY, newPwd);
  }
};
