import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { FormProvider } from './contexts/FormContext';
import { ThemeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
