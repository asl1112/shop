import React, { Component } from 'react'
import '../css/card.css'
import { BsArrowRight } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import cardImg from '../images/card3.png'
import cardImg2 from '../images/card2.png'
const data = require("./CardJson")
const Sdata = require("./SkidkiJson")

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card_top'>
              <h4 className='new_products'>Новинки </h4>
              <p className='all_categories'>Все категории <BsArrowRight className='card_top_icon' /></p>
          </div>
          <div className='card_wrapper'>
            {data.map(item => {
              return <div className='card_list'>
                <img src={cardImg} alt='img' className='card_img' />
                <div className='card_text'>
                  <p className='card_info'>{item.infoText}</p>
                  <p className='card_price'>{item.price}</p>
                  <p className='card_sum'>{item.sum}</p>
                  <div className='card_bottom'>
                    <select id="card_drop">
                      <option>1 шт.</option>
                      <option>2 шт.</option>
                      <option>3 шт.</option>
                    </select>
                    <div className='card_icons'>
                      <MdAddShoppingCart className='card_icon' />
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
      </div>

      <div className='skidki_card'>
          <div className='skidki_top'>
              <h4 className='skidki_title'>Скидки</h4>
              <p className='all_skidki all_categories'>Все товары в категории <BsArrowRight className='skidki_card_icon' /></p>
          </div>
          <div className='skidki_wrapper'>
            {Sdata.map(item => {
                return <div className='scard_list'>
                  <img src={cardImg2} alt='img' className='scard_img' />
                  <div className='scard_text'>
                    <p className='scard_percent'>{item.percentage}</p>
                    <p className='scard_info'>{item.infoText}</p>
                    <p className='scard_price'>{item.price}</p>
                    <p className='scard_sum'>{item.sum}</p>
                    <div className='scard_bottom'>
                      <select id="scard_drop">
                        <option>1 шт.</option>
                        <option>2 шт.</option>
                        <option>3 шт.</option>
                      </select>
                      <div className='scard_icons'>
                        <MdAddShoppingCart className='scard_icon' />
                      </div>
                    </div>
                  </div>
                </div>
              })}
          </div>
      </div>


  </div>

    )
  }
}
