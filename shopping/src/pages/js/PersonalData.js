import React, { Component } from 'react'
import '../css/personal.css'
import arrow from '../images/Arrow.svg'

export default class PersonalData extends Component {
  render() {
    return (
      <div>
        
        <div className='personal'>
          <div className='personal_top'>
              <h3 className='basket_title'><img src={arrow} alt='arrow' className='left_arrow' /> Персональные данные </h3>
          </div>
          <div className='personal_body'>
            <form className='personal_left'>
               <p className='input_name'>Имя</p>
               <input type='text' placeholder='Имя' className='form_inp' />
               
               <p className='input_name'>Фамилия</p>
               <input type='text' placeholder='Фамилия' className='form_inp' />
               
               <p className='input_name'>Телефонный номер</p>
               <input type='text' placeholder='Телефонный номер' className='form_inp' />
               
               <p className='input_name'>Электронной почты</p>
               <input type='text' placeholder='Электронной почты' className='form_inp' />

               <button className='form_btn'>Отправить</button>
            </form>
            <div className='personal_right'>
              <p className='personal_right_title'>Итого:</p>
              <div className='personal_box'>
                <p className='personal_info'>Товары, 4 шт.</p>
                <p className='personal_info2'>40 418 474.34 сум</p>
              </div>
              <div className='personal_box'>
                <p className='personal_info'>Скидка</p>
                <p className='personal_info2'>-14 145 394 сум</p>
                </div>
              <div className='personal_box'>
                <p className='personal_info'>Общая сумма:</p>
                <p className='personal_info2'>26 273 080.34 сум</p>
              </div>
              <p className='personal_text'>Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты</p>
              <p className='personal_text2'>Для расчета стоимости доставки крупногабаритного товара весом более 5 кг обращайтесь к оператору Call-центра*
                * Может взыматься дополнительная плата за доставку в труднодоступные места, (например крупногабаритная техника, которую нужно доставить в дома, с неработающим лифтом)
                ** При необходимости
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
