import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import React from 'react';
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
