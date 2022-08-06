import React, { Component } from 'react'
import arrow from '../images/Arrow.svg'
import cardImg from '../images/card3.png'
import { MdAddShoppingCart } from "react-icons/md";
import axios from 'axios'


export default class New extends Component {
  state = {
    data1: []
  }
  componentDidMount() {
    axios.get('http://shop.abrorjonaxmadov.uz/api/v1/products/')
    .then(res => {
      this.setState({data1: res.data})
      console.log(this.state.data1)
    })
    .catch(err => {
      console.log('xato');
    })
    
  }
  render() {
    return (
      <div>


          
        <div className='card1'>
          <div className='card_top'>
              <h3 className='basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Новинки </h3>
          </div>

          
          <div className='card_wrapper'>
            {this.state.data1.map((item)=> {
                
                  return <div className='card_list'>
                    {item.thumbnail!=null?(
                      <img src={item.thumbnail.image} alt='img' className='card_img' />
                  ):(
                    <img src={cardImg} alt='img' className='card_img' />
                  )}
                <div className='card_text'>
                  <p className='card_title'>{item.title}</p>
                  <p className='card_info'>{item.slug}</p>
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


          
      </div>

    )
  }
}
