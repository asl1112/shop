import React from 'react'
import Home from './pages/js/Home';
import Basket from './pages/js/Basket'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Home /> 
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Basket' element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}