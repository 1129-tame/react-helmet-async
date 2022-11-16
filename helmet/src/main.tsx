import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Page1 } from './page1';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
