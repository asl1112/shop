import React from 'react'
import '../css/carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carouselImg from '../images/carouselImg.png'

export default function Carousel() {
  return (
    <div>

        <div  className='carousel'>
            <OwlCarousel className='carousel_body owl-theme' items='1' dots>
                <div className='carousel_list'>
                    <img src={carouselImg} alt='carouselImg' className='carousel_img' />
                </div>
                <div className='carousel_list'>
                    <img src={carouselImg} alt='carouselImg' className='carousel_img' />
                </div>
                <div className='carousel_list'>
                    <img src={carouselImg} alt='carouselImg' className='carousel_img' />
                </div>
            </OwlCarousel>
        </div>
        

    </div>
  )
}
