import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
