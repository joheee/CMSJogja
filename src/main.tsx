import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import List from './page/List';
import Insert from './page/Insert';
import Update from './page/Update';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List/>,
  },
  {
    path: '/insert',
    element: <Insert/>,
  },
  {
    path: '/update/:nav/:navChild/:id',
    element: <Update/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
