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
import BusinessCard from './components/BusinessCard/BusinessCard.jsx';
import AllServices from './components/AllServices/AllServices.jsx';
import LetterHead from './components/LetterHead/LetterHead.jsx';
import Box from './components/Box/Box.jsx';
import Book from './components/Book/Book.jsx';
import Envelope from './components/Envelope/Envelope.jsx';

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
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: '/services',
    element: <Services></Services>,
    children: [
      {
        path: '/services',
        element: <AllServices></AllServices>
      },
      {
        path: 'businesscard',
        element: <BusinessCard></BusinessCard>
      },
      {
        path: 'letterhead',
        element:<LetterHead></LetterHead>
      },
      {
        path:'box',
        element:<Box></Box>
      },
      {
        path:'book',
        element: <Book></Book>
      },
      {
        path:'envelope',
        element: <Envelope></Envelope>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto mb-1'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
