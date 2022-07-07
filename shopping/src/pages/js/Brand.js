import React, { Component } from 'react'
import '../css/brand.css'
import apple from '../images/apple 1.png'
import huawei from '../images/huawei.png'
import samsung from '../images/samsung 1.png'
import artel from '../images/artel.png'
import mi from '../images/mi.png'


export default class Brand extends Component {
  render() {
    return (
      <div>

        <div className='brand'>
            <h4 className='brand_title'>Популярные бренды</h4>
            <div className='brand_body'>
                <span className='brand_icon'><img src={apple} alt='' /></span>
                <span className='brand_icon'><img src={samsung} alt='' /></span>
                <span className='brand_icon'><img src={huawei} alt='' /></span>
                <span className='brand_icon artel'><img src={artel} alt='' /></span>
                <span className='brand_icon'><img src={mi} alt='' /></span>
            </div>
        </div>


      </div>
    )
  }
}
