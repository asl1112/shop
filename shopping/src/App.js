import React, { Component } from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import logo from './pages/images/logo.png'
import Home from './pages/js/Home'
import Contact from './pages/js/Contact'
import Basket from './pages/js/Basket'
import About from './pages/js/About'
import New from './pages/js/New'
import Personal from './pages/js/PersonalData'
import Products from './pages/js/Products'
import Xits from './pages/js/Xits'
import Skidki from './pages/js/Skidki'
import Brand from './pages/js/Brand';
import './pages/css/Navbar.css'
import Footer from './pages/js/Footer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const data = require("./pages/js/BestJson")


export default class App extends Component {
  state = {
    show: true,
    data:data
  }
  openModal=()=> {
    document.querySelector('.modal1').classList.toggle('modal1_open')
  }
  search=()=> {
    if(document.querySelector('.search_inp').value===''){
      this.setState({show:true})
    } else {this.setState({show:false})}
  }
  render() {
    return (
      <div> 
        <BrowserRouter>

        <div className='top'>
          <div className='top_body'>
            <div className='location_box'>
              <h3 className='top_title'>О нас </h3>
              <div className='location_box2'>
                  <MdLocationPin className='location_icon' /> 
                  <p className='location_text'>Ташкент</p>
              </div>
            </div>
            <div className='tel_box'>
                <p className='tel_text'>  + 99899 000 00 00</p>
                <p className='tel_p'>Заказать звонок</p>
            </div>
          </div>
        </div>

        <nav className='navbar'>
          <div className='nav_logo'>
              <img src={logo} alt='logo' />
          </div>

          <div className='nav_middle'>
              <div className='nav_каталог' onClick={this.openModal}>
                  <IoIosMenu className='nav_каталог_icon' />
                  <p className='nav_каталог_text'>Каталог</p>
              </div>
              <div className='nav_search'>
                  <input type='text' className='search_inp' onKeyUp={this.search} placeholder='Что желаете найти?'></input>
                  <BiSearchAlt2 className='search_icon' />
              </div>
              <select className='dropdown'>
                  <option>Рус</option>
                  <option>O'zb</option>
              </select>
          </div>

          <div className='nav_right'>
              <div className='nav_cart'>
                  <BsCartFill className='cart_icon' />
                  <Link to={'/basket'} className='cart_text'>Корзина</Link>
              </div>
          </div>

          <div className='modal1'>
            <Link to={'/'} >Home</Link>
            <Link to={'/new'} >Новинки</Link>
            <Link to={'/skidki'} >Скидки</Link>
            <Link to={'/xits'} >Хиты продаж</Link>
            <Link to={'/products'} >Товары</Link>
            <Link to={'/personal'} >Персональные данные</Link>
            <Link to={'/about'} >о магазине</Link>
            <Link to={'/contact'} >Контакты</Link>
          </div>

        </nav>

  {this.state.show?(
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/basket' element={<Basket />} />
      <Route exact path='/skidki' element={<Skidki />} />
      <Route exact path='/new' element={<New />} />
      <Route exact path='/About' element={<About />} />
      <Route exact path='/personal' element={<Personal />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/xits' element={<Xits />} />
    </Routes>
  ):(
  <div>{this.state.data.map((item,key)=>{
      var k=0;
      if(item.infoText.includes(document.querySelector('.search_inp').value)){
        return <div>{item.infoText}</div>
      }
    })
  }
  </div>
  )}
  <Brand />
  <Footer />
  </BrowserRouter>

    </div>
    )
  }
}
