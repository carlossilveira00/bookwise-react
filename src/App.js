import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/Auth';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import CreateBookPage from './pages/CreateBookPage';

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
  const queryClient = new QueryClient();

  const theme = createTheme(designTheme(mode))
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme} >
          <ScopedCssBaseline enableColorScheme>
          <Navbar colorMode={mode} setColorMode={setMode}/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='login' element={<LoginPage/>} />
            <Route path='signup' element={<SignUpPage/>} />
            <Route path='create-book' element={<CreateBookPage/>}/>
          </Routes>
          </ScopedCssBaseline>
        </ThemeProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
