import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import defaultTheme from './theme/lightTheme';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
