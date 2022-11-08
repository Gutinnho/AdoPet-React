import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import 'styles/_global.module.scss';
import 'index.module.scss';

import Router from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);