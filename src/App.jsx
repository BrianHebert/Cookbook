import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"

function App() { 
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/cart"/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
