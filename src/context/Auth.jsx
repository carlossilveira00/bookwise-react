import {useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ( userInformation ) => {
    sessionStorage.setItem('userData', userInformation)
    setUser(userInformation)
  };

  const logout = () => {
    sessionStorage.setItem('userData', null)
    setUser(null)
  };

  const signUp = (userInformation) => {
    sessionStorage.setItem('userData', userInformation)
    setUser(userInformation)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext)
}
