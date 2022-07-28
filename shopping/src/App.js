import React, { Component } from 'react'
import { IoIosMenu } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import logo from './pages/images/logo.png'
import Home from './pages/js/Home'
import './pages/css/Navbar.css'
const data = require("./pages/js/BestJson")
export default class App extends Component {
  state = {
    show: true,
    data:data
  }
  search=()=> {
if(document.querySelector('.search_inp').value==''){
  this.setState({show:true})
}else{this.setState({show:false})}
  }
  render() {
    return (
      <div>

        <nav className='navbar'>
          <div className='nav_logo'>
              <img src={logo} alt='logo' />
          </div>

          <div className='nav_middle'>
              <div className='nav_каталог'>
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
                  <p className='cart_text'>Корзина</p>
              </div>
          </div>
        </nav>
{this.state.show?(
        <Home />):(
<div>{this.state.data.map((item,key)=>{
  var k=0;
if(item.infoText.includes(document.querySelector('.search_inp').value)){
 

  return <div>{item.infoText}</div>
}


})
  
  
  }</div>



        )}
<h1>salom</h1>
      </div>
    )
  }
}
