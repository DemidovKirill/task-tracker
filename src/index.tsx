import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import AppComponent from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppComponent/>
  </React.StrictMode>
);
