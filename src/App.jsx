import { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Logout from './components/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={< Signin/>} />
        <Route path='/sign-up' element={< Signup/>} />
        <Route path='/log-out' element={< Logout/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
