import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'services',
        element:<Services></Services>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)
