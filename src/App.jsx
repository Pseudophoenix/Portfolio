import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import ThreeJsBackground from './ThreeJsBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* Your other components go here */}
      <div style={{
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // color: 'white',
        // textAlign: 'center',
        // zIndex: 10
      }}>
        <Home/>
        {/* <h1>Your Content Here</h1> */}
        {/* <p>This appears on top of the Three.js background</p> */}
      </div>
    
    </>
  )
}

export default App
