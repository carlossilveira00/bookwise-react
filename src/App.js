import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm'
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';

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
    <ThemeProvider theme={theme} >
      <Navbar colorMode={mode} setColorMode={setMode}/>
      <div className="App">
        <LoginPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
