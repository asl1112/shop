import React from 'react'
import '../css/card.css'
import { BsArrowRight } from "react-icons/bs";

export default function Card() {
  return (
    <div>

        <div className='card'>
            <div className='card_top'>
                <h4 className='new_products'>Новинки </h4>
                <p className='all_categories'>Все категории <BsArrowRight className='card_top_icon' /></p>
            </div>
        </div>

    </div>
  )
}
