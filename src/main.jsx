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
import Order from './Pages/Menu/Order/OrderMenu/Order';
import Loging from './Pages/LogingAndRefister/Loging';
import Authprovider from './Authprovider';
import Register from './Pages/LogingAndRefister/Register';
import PrivetRoute from './Pages/PrivetRoute';


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
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'loging',
        element: <Loging></Loging>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]

  },
]);



createRoot(document.getElementById('root')).render(
  <Authprovider>
    <HelmetProvider>
      <StrictMode>
        <div className='p-16'>
          <RouterProvider router={router} />
        </div>
      </StrictMode>
    </HelmetProvider>
  </Authprovider>
)