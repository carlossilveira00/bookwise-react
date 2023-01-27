import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

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
      <div className="App">
        <Navbar colorMode={mode} setColorMode={setMode}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
