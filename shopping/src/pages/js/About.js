import React, { Component } from 'react'
import '../css/about.css'
import aboutImg from '../images/about.png'

export default class About extends Component {
  
  render() {
    return (
      <div>
        
        <div className='about'>
          <div className='about_left'>
            <h3 className='about_title'>О магазине</h3>
            <div className='about_box'>
              <div className='about_box1'>
                <p className='box_title2'>1800+ <span>отзывов</span></p>
                <p className='box_info2'>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
              </div>
              <div className='about_box1'>
                <p className='box_title2'>4 <span>ГОДА</span></p>
                <p className='box_info2'>Продаем казаныеи аксессуары в Беларуси и России</p>
              </div>
              <div className='about_box1'>
                <p className='box_title2'><span>официальный дилер</span></p>
                <p className='box_info2'>Работаем напрямую с заводами и имеем сертификаты</p>
              </div>
            </div>
          </div>
          <div className='about_right'>
              <img src={aboutImg} alt='img' className='about_img'/>
          </div>
        </div>

      </div>
    )
  }
}
