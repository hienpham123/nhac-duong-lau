import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { viVN } from '@mui/material/locale';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/contexts/JWTAuthContext';
import routes, { renderRoutes } from './router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Provider } from 'react-redux'
import { store } from './components/redux';
import ConfirmDialog from './components/ConfirmDialog';
import LoadingScreen from './components/LoadingScreen';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#3853A4',
        contrastText: '#fff'
      },
      text: {
        primary: '#544949'
      }
    }
  },
  // viVN
);


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <BrowserRouter>
            <AuthProvider>{renderRoutes(routes)}</AuthProvider>
          </BrowserRouter>
        </LocalizationProvider>
        <ConfirmDialog />
        <LoadingScreen />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
