import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FBA92B'
    },
    secondary:{
      main: '#565656',
      light: '9E9E9E'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
