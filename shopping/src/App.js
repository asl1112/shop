import React from 'react'
import Navbar from './pages/js/Navbar'
import Header from './pages/js/Header'
import Card from './pages/js/Card'
import Popular from './pages/js/PopularCard'
import Bestsellers from './pages/js/Bestsellers'
import Brand from './pages/js/Brand'
import Footer from './pages/js/Footer'

export default function App() {
  return (
    <div>

      <Navbar />
      <Header />
      <Card />
      <Popular />
      <Bestsellers />
      <Brand />
      <Footer />

    </div>
  )
}