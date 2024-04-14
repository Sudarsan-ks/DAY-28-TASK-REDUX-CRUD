import React from "react"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Product } from "./components/Product"
import { Cart } from './components/Cart'


function App() {

  return (
    <div className="container">
      <div className="navbar_cart">
        <Navbar />
      </div>
      <div className="main_cart">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
