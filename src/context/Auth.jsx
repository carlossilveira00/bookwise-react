import {useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ( userInformation ) => {
    setUser(userInformation)
  };

  const logout = () => {
    setUser(null);
  };

  const useSignUp = () => {

    console.log('Tried to sign up');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, useSignUp }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext)
}
