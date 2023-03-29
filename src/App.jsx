import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="box-border">
      <Navbar />
    </div>
  )
}

export default App