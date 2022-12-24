import React from 'react';
import ReactDOM from 'react-dom/client';
// import Form from './Form';
import FormikForm from './Organisms/FormikForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormikForm />
  </React.StrictMode>
);
