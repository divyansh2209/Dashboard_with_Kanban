import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './contexts/ContextProvider';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>,

);
