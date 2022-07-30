import React, { Component } from 'react'
import '../css/product.css'
import arrow from '../images/Arrow.svg'
import proImg from '../images/pro1.png'
import proImg2 from '../images/pro2.png'
import Popular from './PopularCard'

export default class Products extends Component {
  render() {
    return (
      <div>
        
        <div className='product'>
          <div className='product_top'>
              <h3 className='product_title basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Товары</h3>
           </div>
           <div className='product_body'>
              <div className='product_left'>
                <div className='product_box1'>
                  <img src={proImg} alt='img' className='product_img'/>
                  <img src={proImg} alt='img' className='product_img2'/>
                </div>
                <div className='product_box2'>
                  <img src={proImg2} alt='img' className='product_img3'/>
                </div>
              </div>
              <div className='product_right'>
                  <p className='right_title'>VINTER 2020 ВИНТЕР 2020</p>
                  <p className='right_date'>Арт. 890.321.44   <span>  / Под заказ на 4.04.2021</span></p>
                  <p className='right_info'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor <br /> and Outdoor Planting</p>
                  <div className='right_box'>
                    <p className='box_title'>62 392,31 Сум</p>
                    <div className='right_box2'>
                      <div className='right_span'>-</div>
                      <div className='right_span2'>1</div>
                      <div className='right_span'>+</div>
                    </div>
                  </div>
                  <button className='right_btn'>Добаить в корзину +</button>
              </div>
           </div>
        </div>

        <Popular />

      </div>
    )
  }
}
