import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter em volta dos componentes que precisam ter acesso às rotas

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
