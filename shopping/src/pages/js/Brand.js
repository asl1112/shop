import React, { Component } from 'react'
import '../css/brand.css'
// import apple from '../images/apple 1.png'
// import huawei from '../images/huawei.png'
// import samsung from '../images/samsung 1.png'
// import artel from '../images/artel.png'
// import mi from '../images/mi.png'
import { SiSamsung } from 'react-icons/si'
import { AiFillApple } from 'react-icons/ai'
import { SiXiaomi } from 'react-icons/si'
import { SiHuawei } from 'react-icons/si'


export default class Brand extends Component {
  render() {
    return (
      <div>

        <div className='brand'>
            <h4 className='brand_title'>Популярные бренды</h4>
            <div className='brand_body'>
                <span className='brand_icon'><AiFillApple /></span>
                <span className='brand_icon'><SiSamsung /></span>
                <span className='brand_icon'><SiHuawei /></span>
                <span className='brand_icon artel'>artel</span>
                <span className='brand_icon'><SiXiaomi /></span>
            </div>
        </div>


      </div>
    )
  }
}
