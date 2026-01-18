'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const AuthModalContext = createContext(undefined);

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('login');

  const openLogin = useCallback(() => {
    setMode('login');
    setIsOpen(true);
  }, []);

  const openRegister = useCallback(() => {
    setMode('register');
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AuthModalContext.Provider value={{ isOpen, mode, setMode, openLogin, openRegister, close }}>
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
