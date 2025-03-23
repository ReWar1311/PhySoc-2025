import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'
// import Gallery from './pages/Gallery/Gallery'
import BadGateway from './404/404'
import EventPage from './pages/EventPage/EventPage'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Events /> */}
      <Header />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ourteam" element={<Team />} />
      <Route path="/events" element={<Events/>} />
      {/* <Route path="/gallery" element={<Gallery/>} /> */}
      <Route path='/event/:id' element={<EventPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/*" element={<BadGateway/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
