import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order';
import loadedProduct from './components/loaded';

const router=createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>,
      children:[
        {
          path:"/",
          element:<Shop></Shop>
        },
        {
          path:"/order",
          element:<Order></Order>,
          loader:loadedProduct
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
