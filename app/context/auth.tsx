'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({
    isAuthenticated: false,
    isLoading: true
  });
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on initial load
    const token = localStorage.getItem('auth_token');
    setState({
      isAuthenticated: !!token,
      isLoading: false
    });
  }, []);

  const login = async (username: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // Replace with actual authentication logic
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('auth_token', 'dummy_token');
        setState({
          isAuthenticated: true,
          isLoading: false
        });
        router.push('/wp-admin/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setState({
      isAuthenticated: false,
      isLoading: false
    });
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      isLoading: state.isLoading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}