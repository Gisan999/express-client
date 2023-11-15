import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUserData from './components/PostUserData/PostUserData';
import DisplayUser from './components/DisplayUser/DisplayUser';
import UpdateUser from './components/UpdateUser/UpdateUser';


const router = createBrowserRouter([
  {
    path: "/",
    element:<PostUserData/>,
  },
  {
    path: "/users",
    element:<DisplayUser/>,
    loader: ()=> fetch(`http://localhost:5000/users`)
  },
  {
    path: "/users/:id",
    element:<UpdateUser/>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
