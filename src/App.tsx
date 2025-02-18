import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'

// let events = [
//   {
//     title: 'Resonanse',
//     date: '2022-01-01',
//     description: 'A fest',
//     image: 'https://images.unsplash.com/photo-1573497019700-5f16e2206b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0NzV8MHwxfGFsbHwxfHx8fHx',
//   },
//   ]

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
