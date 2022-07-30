import React, { Component } from 'react'
import '../css/basket.css'
import Popular from './PopularCard'
// import Brand from './Brand'
import arrow from '../images/Arrow.svg'
import card_img from '../images/card2.png'

export default class Basket extends Component {
  render() {
    return (
      <div>
        
        <div className='basket'>
           <div className='basket_top'>
              <h3 className='basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Корзина</h3>
              <p className='basket_info'>3 предмета</p>
           </div>
           <div className='basket_body'>
              <div className='basket_left'>
                  <div className='basket_texts'>
                    <p className='basket_text'>PRODUCT DETAILS</p>
                    <div>
                      <p className='basket_text'>AMOUNT</p>
                      <p className='basket_text'>PRICE</p>
                      <p className='basket_text'>TOTAL</p>
                    </div>
                  </div>

                  <div className='basket_card'>
                    <div className='basket_box'>
                      <div className='basket_box1'>
                        <img src={card_img} alt='img' className='basket_img' />
                        <span className='card_close'>x</span>
                      </div>
                      <p>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                    </div>
                    <div className='basket_box2'>
                      <div className='basket_counter'>
                        <span className='counter_plus'>-</span>
                        <span className='counter_count'>1</span>
                        <span className='counter_minus'>+</span>
                      </div>
                      <p className='basket_sum'>62 392,23 Сум</p>
                      <p className='basket_sum'>62 392,23 Сум</p>
                    </div>
                  </div>

                  <div className='basket_card'>
                    <div className='basket_box'>
                      <div className='basket_box1'>
                        <img src={card_img} alt='img' className='basket_img' />
                        <span className='card_close'>x</span>
                      </div>
                      <p>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                    </div>
                    <div className='basket_box2'>
                      <div className='basket_counter'>
                        <span className='counter_plus'>-</span>
                        <span className='counter_count'>1</span>
                        <span className='counter_minus'>+</span>
                      </div>
                      <p className='basket_sum'>62 392,23 Сум</p>
                      <p className='basket_sum'>62 392,23 Сум</p>
                    </div>
                  </div>
                  
                  <div className='basket_card'>
                    <div className='basket_box'>
                      <div className='basket_box1'>
                        <img src={card_img} alt='img' className='basket_img' />
                        <span className='card_close'>x</span>
                      </div>
                      <p>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                    </div>
                    <div className='basket_box2'>
                      <div className='basket_counter'>
                        <span className='counter_plus'>-</span>
                        <span className='counter_count'>1</span>
                        <span className='counter_minus'>+</span>
                      </div>
                      <p className='basket_sum'>62 392,23 Сум</p>
                      <p className='basket_sum'>62 392,23 Сум</p>
                    </div>
                  </div>
              </div>

              <div className='basket_right'>
                  <h3 className='basket_title2'>Итог заказа</h3>
                  <div className='basket_box4'>
                    <p className='basket_punkta'>3 ПУНКТА</p>
                    <p className='basket_price'>62 392,23 Сум</p>
                  </div>
                  <div className='basket_box5'>
                    <p className='basket_product'>Товары, 4 шт.</p>
                    <p className='basket_product2'>40 418 474.34 сум</p>
                  </div>
                  <div className='basket_box6'>
                    <p className='basket_skidka'>Скидка</p>
                    <p className='basket_skidka'>-14 145 394 сум</p>
                  </div>
                  <div className='basket_box7'>
                    <p className='basket_summa'>Общая сумма:</p>
                    <p className='basket_summa2'>26 273 080.34 сум</p>
                  </div>
                  <div className='basket_box8'>
                    <p className='basket_text2'>Итого</p>
                    <p className='basket_price2'>62 392,23 Сум</p>
                  </div>
                  <button className='basket_btn'>Продолжать</button>
              </div>
           </div>
        </div>
        
        <Popular />

      </div>
    )
  }
}
