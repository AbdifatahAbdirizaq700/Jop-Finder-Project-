// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (username, password) => {
    // Example: Replace with actual sign-in logic, possibly involving an API request
    const fakeUser = { username: username, name: "John Doe" };
    setUser(fakeUser);
  };

  const signUp = (username, password) => {
    // Example: Replace with actual sign-up logic
    const fakeUser = { username: username, name: "Jane Doe" };
    setUser(fakeUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
