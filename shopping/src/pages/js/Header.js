import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel_img from '../images/carouselImg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css'

export default class Header extends Component {
  render() {
    return (
      <div>

        <div className='header'>
            
         <Carousel className='carousel'>
            <Carousel.Item className='carousel_item'>
                <img
                className="d-block w-100 carousel_img"
                src={carousel_img}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carousel_item'>
                <img
                className="d-block w-100 carousel_img"
                src={carousel_img}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className='carousel_item'>
                <img
                className="d-block w-100 carousel_img"
                src={carousel_img}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

      </div>
    )
  }
}
