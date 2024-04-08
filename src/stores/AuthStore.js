import { create } from 'zustand';

export const useAuth = create((set) => ({
  token: localStorage.getItem('token') || '',

  login: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: '' });
  },
}));
