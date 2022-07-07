import React from 'react'
import './pages/js/Navbar'
import Navbar from './pages/js/Navbar'
import Carousel from './pages/js/Carousel'
import Card from './pages/js/Card'
import Popular from './pages/js/PopularCard'
import Bestsellers from './pages/js/Bestsellers'
import Brand from './pages/js/Brand'
import Footer from './pages/js/Footer'

export default function App() {
  return (
    <div>

      <Navbar />
      <Carousel />
      <Card />
      <Popular />
      <Bestsellers />
      <Brand />
      <Footer />

    </div>
  )
}