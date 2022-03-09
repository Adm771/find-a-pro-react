import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();
const AuthContextUpdate = createContext();
const AuthUserContext = createContext();
const AuthUserContextUpdate = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useAuthContextUpdate() {
  return useContext(AuthContextUpdate);
}

export function useAuthUserContext() {
  return useContext(AuthUserContext);
}

export function useAuthUserContextUpdate() {
  return useContext(AuthUserContextUpdate);
}

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState("false");
    const [user, setUser] = useState();

    const toggleAuth = () => setIsAuthenticated(isAuthenticated => !isAuthenticated); 
    const setAuthUser = (authUser) => setUser(authUser); 

    return (
      <AuthContext.Provider value={isAuthenticated}>
        <AuthContextUpdate.Provider value={toggleAuth}>
          <AuthUserContext.Provider value={user}>
              <AuthUserContextUpdate.Provider value={setAuthUser}>
                {children}
              </AuthUserContextUpdate.Provider>
            </AuthUserContext.Provider>
        </AuthContextUpdate.Provider>
      </AuthContext.Provider>
    );
}
 
