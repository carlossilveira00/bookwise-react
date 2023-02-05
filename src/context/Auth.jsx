import {useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({open: false, severity: 'info', message: ''})

  useEffect(()=>{
    const data = sessionStorage.getItem('userData')
    if (data !== null) setUser(JSON.parse(data));
  },[])

  const login = ( userInformation ) => {
    sessionStorage.setItem('userData', JSON.stringify(userInformation))
    setUser(userInformation)
    setAlert({open: true, severity: 'success', message: 'You are successfully Logged In!'});
  };

  const logout = () => {
    sessionStorage.setItem('userData', null)
    setUser(null);
    setAlert({open: true, severity: 'warning', message: 'You successfully Logged Out!'});
  };

  const signUp = (userInformation) => {
    sessionStorage.setItem('userData', JSON.stringify(userInformation))
    setUser(userInformation)
    setAlert({open: true, severity: 'success', message: 'You are successfully Signed In!'});
  };

  return (
    <AuthContext.Provider value={{ user, alert, login, logout, signUp }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext)
}
