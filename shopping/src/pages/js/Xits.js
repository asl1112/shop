import React, { Component } from 'react'
import { BsArrowRight } from "react-icons/bs";
import bestsellersImg from '../images/card1.png'
import { MdAddShoppingCart } from "react-icons/md";
import arrow from '../images/Arrow.svg'
const Bestdata = require("./BestJson")

export default class Xits extends Component {
  render() {
    return (
      <div>
        
        <div className='bestsellers'>
          <div className='bestsellers_top'>
            <h3 className='basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Хиты продаж </h3>
          </div>
          <div className='bestsellers_wrapper'>
            {Bestdata.map(item => {
                return <div className='bestsellers_list'>
                  <img src={bestsellersImg} alt='img' className='bestsellers_img' />
                  <div className='bestsellers_text'>
                    <span className='bestsellers_span'>Хит</span>
                    <p className='bestsellers_percent'>{item.percentage}</p>
                    <p className='bestsellers_info'>{item.infoText}</p>
                    <p className='bestsellers_price'>{item.price}</p>
                    <p className='bestsellers_sum'>{item.sum}</p>
                    <div className='bestsellers_bottom'>
                      <select id="bestsellers_drop">
                        <option>1 шт.</option>
                        <option>2 шт.</option>
                        <option>3 шт.</option>
                      </select>
                      <div className='bestsellers_icons'>
                        <MdAddShoppingCart className='bestsellers_icon' />
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
