import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const RaktDaanContext = createContext();

// Provider Component
export const RaktDaanProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user info (e.g., id, name, role, token)

  // Initialize state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('raktDaanUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('raktDaanUser', JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('raktDaanUser');
  };

  // Role-based access control helpers
  const isAdmin = () => user?.role === 'raktdaan';
  const isCampAdmin = () => user?.role === 'campadmin';
  const isDonor = () => user?.role === 'donor';

  return (
    <RaktDaanContext.Provider value={{ user, login, logout, isAdmin, isCampAdmin, isDonor }}>
      {children}
    </RaktDaanContext.Provider>
  );
};

// Custom Hook to Use Context
export const useRaktDaanContext = () => {
  return useContext(RaktDaanContext);
};