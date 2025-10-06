import { useState } from 'react'

import './App.css'
// import NavBar from './components/NavBar'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import Products from './pages/Products'
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import About from './pages/About' 
import ToggleSwitch from './miniProject/toggleSwitch/ToggleSwitch'


function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <ToggleSwitch />
    </div>
    // <div className="flex flex-col min-h-screen">
    //   <NavBar />
    //   <div className='flex-grow container mx-auto px-4 py-8'>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/product/:id" element={<ProductDetails />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </div>
  )
}

export default App
