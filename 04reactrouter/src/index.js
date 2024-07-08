import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Layout, Home, About, Contact, User, Github} from './components/route'
import { githubInfoLoader } from './components/Github/Github';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
    {
      path: '',
      element: <Home/>,
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'user/:userid',
      element: <User/>,
    },
    {
      loader: githubInfoLoader,
      path: 'github',
      element: <Github/>,
    }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);