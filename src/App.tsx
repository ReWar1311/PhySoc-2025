import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'


function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Events /> */}
  <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </>
  )
}

export default App
