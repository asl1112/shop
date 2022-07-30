import React, { Component } from 'react'
// import Navbar from './Navbar'
import Header from './Header'
import Card from './Card'
import Popular from './PopularCard'
import Bestsellers from './Bestsellers'
// import Brand from './Brand'
// import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>

        {/* <Navbar /> */}
        <Header />
        <Card />
        <Popular />
        <Bestsellers />
        {/* <Brand /> */}
        {/* <Footer /> */}
        

      </div>
    )
  }
}
