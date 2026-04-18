'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const AuthModalContext = createContext(undefined);

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('login');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openLogin = useCallback(() => {
    setMode('login');
    setSelectedPlan(null);
    setIsOpen(true);
  }, []);

  const openRegister = useCallback((plan = null) => {
    setMode('register');
    setSelectedPlan(plan);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSelectedPlan(null);
  }, []);

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, setMode, selectedPlan, openLogin, openRegister, close }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
}
