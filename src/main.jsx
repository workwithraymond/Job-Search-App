import React from 'react'
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'

store
Provider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>
);
