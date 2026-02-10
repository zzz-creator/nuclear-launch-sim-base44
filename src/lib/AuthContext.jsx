import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

// Mock user for local development
const MOCK_USER = {
  id: 'local-user-id',
  email: 'commander@local.sim',
  full_name: 'Strategic Commander',
  role: 'admin'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(MOCK_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState({
    id: 'local-app',
    public_settings: {}
  });

  useEffect(() => {
    // In full local mode, we are always "ready"
    setIsLoadingAuth(false);
    setIsLoadingPublicSettings(false);
  }, []);

  const logout = () => {
    console.log('Logout called in local mode - no action taken');
  };

  const navigateToLogin = () => {
    console.log('Navigate to login called in local mode - no action taken');
  };

  const checkAppState = async () => {
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
