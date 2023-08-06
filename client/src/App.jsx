import { useState } from 'react'
import './App.css'
import './text.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Cards from './Cards.jsx'
import LogIn from './LogIn.jsx'
import SignIn from './SignIn.jsx'
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/log-in" element={<LogIn />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
