import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { PetProvider } from './context/PetContext';
import { GlobalStyle } from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <PetProvider>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </PetProvider>
  </React.StrictMode>
);

