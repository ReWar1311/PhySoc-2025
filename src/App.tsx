
import './App.css'
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
// import Gallery from './pages/Gallery/Gallery'
import BadGateway from './404/404'
import EventPage from './pages/EventPage/EventPage'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Header from './components/Header/Header'

import TeamRouter from './pages/Team'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import EventSection from './pages/EventSection/EventSection'
import FooterV2 from './components/FooterV2/FooterV2'



function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <><Header/><Home /><About /><EventSection /><Gallery /><FooterV2 /></>,
      },
      {
        path: '/home',
        element: <><Header/><Home /><About /><EventSection /><Gallery /><FooterV2 /></>,
      },
      {
        path: '/team',
        element: <><Header/><TeamRouter/><FooterV2 /></>,
      },
      {
        path: '/team/:year',
        element: <><Header/><TeamRouter/><FooterV2 /></>,
      },
      {
        path: '/ourteam',
        element: <><Header/><TeamRouter/><FooterV2 /></>,
      },
      {
        path: '/events',
        element: <><Header/><Events /><FooterV2 /></>,
      },
      {
        path: '/event/:id',
        element: <><Header/><EventPage /><FooterV2 /></>,
      },
      {
        path: '/login',
        element: <><Header/><Login /><FooterV2 /></>,
      },
      {
        path: '/signup',
        element: <><Header/><Signup /><FooterV2 /></>,
      },
      { 
        path: '/forgot-password',
        element: <><Header/><ForgotPassword /><FooterV2 /></>,
      },
      {
        path: '/*',
        element: <><Header/><BadGateway /><FooterV2 /></>,
      },
      {
        path: '/about',
        element: <><Header/><About /><FooterV2 /></>,
      },
      {
        path: 'gallery',
        element: <><Header/><Gallery /><FooterV2 /></>,
      },
    ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
