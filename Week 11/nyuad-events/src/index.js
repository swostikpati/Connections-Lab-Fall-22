import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; //to use routing - BrowserRouter is a component in itself

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorite-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root'));

//wrap the favorites context provider around everything