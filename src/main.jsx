import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import AuthProvider from './components/AuthProvider/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addProducts",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/update",
        element:<UpdateProduct></UpdateProduct>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/products/:title",
        element:<Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
