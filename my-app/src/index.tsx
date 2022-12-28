import React from 'react';
import ReactDOM from 'react-dom/client';
import TestPage from './Pages/TestPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>
);
