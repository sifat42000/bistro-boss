import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { HelmetProvider } from 'react-helmet-async';
import Menu from './Pages/Menu/Menu';
import Main from './Layout/Main';
import Home from './Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      }
      
    ]

  },
]);



createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <div className='p-16'>
        <RouterProvider router={router} />
      </div>
    </StrictMode>
  </HelmetProvider>,
)