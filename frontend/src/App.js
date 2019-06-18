import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter em volta dos componentes que precisam ter acesso às rotas

import Header from './components/Header'
import Routes from './routes';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes />
      </BrowserRouter>
   );
}

export default App;
