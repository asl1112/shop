import React, { Component } from 'react'
import '../css/Navbar.css'
import { BsTelephone } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";


export default class Navbar extends Component {
  render() {
    return (
      <div>
     
        <div className='top'>
            <div className='top_body'>
                <div className='tel_box'>
                    <BsTelephone  className='tel_icon' /> 
                    <p className='tel_text'>+998 (99) 000 00 00</p>
                </div>
                <div className='location_box'>
                    <MdLocationPin className='location_icon' /> 
                    <p className='location_text'>Ташкент</p>
                </div>
            </div>
        </div>

        <nav className='nav'>
            <div className='nav_logo'>
                Logo
            </div>
            <div className='nav_middle'>
                <div className='nav_каталог'>
                    <IoIosMenu className='nav_каталог_icon' />
                    <p className='nav_каталог_text'>Каталог</p>
                </div>
                <div className='nav_search'>
                    <input type='text' className='search_inp' placeholder='Поиск по товарам'></input>
                    <BiSearchAlt2 className='search_icon' />
                </div>
            </div>
            <div className='nav_right'>
                <div className='nav_cart'>
                    <BsCartFill className='cart_icon' />
                    <p className='cart_text'>Корзина</p>
                </div>
            </div>
        </nav>

      </div>
    )
  }
}
