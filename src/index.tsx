import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { reactModalRoutes } from './Routes/react-modal-routes';

//Definiendo BrowserRouter
let modalRoutes = new reactModalRoutes();
let rutas = createBrowserRouter(modalRoutes.traerRutas());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <LogIn /> */}
    <Layout>
      <RouterProvider router={rutas} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
