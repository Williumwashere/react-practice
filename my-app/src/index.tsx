import React from 'react';
import ReactDOM from 'react-dom/client';
import FormikForm from './Molecules/FormikForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormikForm />
  </React.StrictMode>
);
