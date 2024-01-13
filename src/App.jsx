import { useState } from 'react'
import { BrowserRouter as Routes, Router , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>} />
        

      </Routes>
     </Router>
    </>
  )
}

export default App
