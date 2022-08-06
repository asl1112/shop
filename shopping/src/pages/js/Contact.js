import React, { Component } from 'react'
import '../css/contact.css'
import contactIcon from '../images/W.png'
import contactIcon1 from '../images/f.png'
import contactIcon2 from '../images/G.png'
import contactImg from '../images/contact.png'

export default class Contact extends Component {
 
  render() {
    return (
      <div>
        
          <div className='contact'>
             <div className='contact2'>
             <h4 className='contact_title'>Контакты</h4>
             <div className='contact_body'>
                <div className='contact_left'>
                    <p className='contact_info'>+ 375 434 847 28 84</p>
                    <p className='contact_info'>+ 375 448 473 09 48</p>
                    <p className='contact_info'>designers@gmail.com</p>
                </div>
                <div className='contact_right'>
                  <p className='contact_info'>г.Юнусабад</p>
                  <p className='contact_info'>Ул. Унверсам</p>
                  <p className='contact_info'>Д. 1, Кв. 43</p>
                </div>
             </div>
             <div className='contact_bottom'>
                <div className='contact_icon'>
                  <img src={contactIcon} alt=''/>
                </div>
                <div className='contact_icon'>
                  <img src={contactIcon1} alt=''/>
                </div>
                <div className='contact_icon'>
                  <img src={contactIcon2} alt=''/>
                </div>
             </div>
             </div>
             <img src={contactImg} alt='img' />
          </div>


      </div>
    )
  }
}
