import React, { Component } from 'react'
import '../css/footer.css'
import { BsTelephoneFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import logo from '../images/footer_logo.png'

export default class Footer extends Component {
  render() {
    return (
      <div>
        
        <footer className='footer'>
            <div className='footer_body'>
                <div className='footer_information'>
                    <p className='footer_title'>Информация</p>
                    <ul className='footer_ul'>
                        <li className='footer_li'>О нас</li>
                        <li className='footer_li'>Условия использования</li>
                        <li className='footer_li'>Оплата и доставка</li>
                        <li className='footer_li'>Как заказать</li>
                        <li className='footer_li'>Вопросы и ответы</li>
                    </ul>
                </div>

                <div className='footer_categories'>
                    <p className='categories_title'>КАТЕГОРИИ ТОВАРОВ</p>
                    <ul className='footer_ul2'>
                        <li className='footer_li2'>Фотоаппараты</li>
                        <li className='footer_li2'>Объективы</li>
                        <li className='footer_li2'>Аксессуары для студии</li>
                        <li className='footer_li2'>Вспышки для фотоаппаратов</li>
                        <li className='footer_li2'>Аксессуары для камеры</li>
                        <li className='footer_li2'>Штативы</li>
                        <li className='footer_li2'>Видеокамеры</li>
                    </ul>
                </div>

                <div className='footer_box'>
                    <div className='box_left'>
                        <div className='left_top'>
                            <span className='tel_icon'><BsTelephoneFill /></span>
                            <p className='footer_tel'>+99899 000 00 00</p>
                        </div>
                        <p className='box_address'>Yunusobod tumani -22 kvartal</p>
                        <p className='box_email'>Эл.почта: webdesigner@gmail.com</p>
                        <div className='box_search'>
                            <input type='text' placeholder='Поиск' className='box_inp' />
                            <BiSearchAlt2 className='inp_icon' />
                        </div>
                    </div>
                    <div className='box_right'>
                        <button className='footer_btn'>ЗАКАЗАТЬ ЗВОНОК</button>
                        <div className='footer_icons'>
                            <span className='footer_icon'><FaFacebookF /></span>
                            <span className='footer_icon'><AiOutlineInstagram /></span>
                            <span className='footer_icon'><AiOutlineTwitter /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <img src={logo} alt='img' className='footer_logo' />
                <p className='footer_text'>© 2022 Lift Media. All Rights Reserved. </p>
            </div>
        </footer>


      </div>
    )
  }
}
