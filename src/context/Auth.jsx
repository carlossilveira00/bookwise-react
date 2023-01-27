import axios from 'axios';
import {useState, useContext, createContext } from 'react';
import { useQuery } from 'react-query';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ( userInformation ) => {
    setUser(userInformation)
  };

  const useLogout = () => {
    console.log( 'Signed Out!' )
  };

  const useSignUp = () => {
    console.log('Tried to sign up');
  };

  return (
    <AuthContext.Provider value={{ user, login, useLogout, useSignUp }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext)
}
