import React, { Component } from 'react'
import '../css/popular.css'
import popularImg from '../images/popular_card1.png'
import { BsArrowRight } from "react-icons/bs";
const Pdata = require("./PJson")

export default class PopularCard extends Component {
  render() {
    return (
      <div>
        
        <div className='popular_card'>
          <div className='popular_top'>
              <h4 className='popular_title'>Популярные категории</h4>
              <p className='all_popular all_categories'>Все товары в категории <BsArrowRight className='popular_card_icon' /></p>
          </div>
          <div className='popular_wrapper'>
              {Pdata.map(item => {
                return <div className='popular_list'>
                  <img src={popularImg} alt='img' className='popular_img' />
                  <p className='popular_list_title'>{item.title}</p>
                </div>
              })}
          </div>
        </div>

      </div>
    )
  }
}
