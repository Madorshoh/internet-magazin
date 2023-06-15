import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { SearchData } from '../../dataMagazine'

const Searchdatas = () => {
  console.log(SearchData);
  return (
    <div className='Search__data-container'>
      {SearchData.map((item) => {
        return(
          <div className="items__card" key={item.id}>
          <div className="items__card-img">
            <Link><AiOutlineHeart/></Link>
            <img src={item.img} alt="" />
          </div>
          <div className="items__card-name">
            <h3>{item.name.slice(0,15)}...</h3>
          </div>
          <div className="items__card-price">
            <p>{item.price}</p>
          </div>
          <div className="items__card-box">
            <div className="items__card-basket">
              <Link><SlBasket/></Link>
            </div>
            <div className="items__card-btn">
              <button className='card-btn'>Muddatli to'lov</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Searchdatas
