import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import AboutUs from './Components/AboutUs/AboutUs'
import Fypdf from './Components/Fypdf/Fypdf'
import Sypdf from './Components/Sypdf/Sypdf'
import Typdf from './Components/Typdf/Typdf'

const router = createBrowserRouter([
  { path: '', element: <Signup /> },
  { path: '/login', element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path:"Fypdf",
        element:<Fypdf />
      },
      {
        path:"Sypdf",
        element:<Sypdf />
      },
      {
        path:"Typdf",
        element:<Typdf />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
