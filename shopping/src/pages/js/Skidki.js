import React, { Component } from 'react'
import cardImg2 from '../images/card2.png'
import arrow from '../images/Arrow.svg'
import { MdAddShoppingCart } from "react-icons/md";
const Sdata = require("./SkidkiJson")

export default class Skidki extends Component {
  render() {
    return (
      <div>
        
        <div className='skidki_card'>
          <div className='skidki_top'>
          <h3 className='basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Скидки <span style={{color: '#f00'}}> %</span> </h3>
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
