import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/Auth';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

const designTheme = (colorMode) => {
  return {
    palette: {
      mode: colorMode,
      primary: {
        main: '#FBA92B'
      },
      secondary:{
        main: '#565656',
        light: '9E9E9E'
      }
    }
  }
}

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme(designTheme(mode))
  return (
    <AuthProvider>
      <ThemeProvider theme={theme} >
        <Navbar colorMode={mode} setColorMode={setMode}/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
