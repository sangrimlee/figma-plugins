import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@figma-plugins/ui';
import { App } from './app';

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- because 'root' element always exists. */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
);
