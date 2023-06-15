import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import {AllData} from '../../dataMagazine'
import './homeBook.css'



const HomeBook = () => {


  return (
    <div className='main__container'>
      {AllData.books.slice(0,4).map((item)=>{
        return(
          <div className="main__card" key={item.id}>
                <div className="main__card-img">
                  <Link><AiOutlineHeart/></Link>
                  <img src={item.img} alt="" />
                </div>
                <div className="main__card-name">
                  <h5>{item.name.slice(0,20)}...</h5>
                </div>
                <div className="main__card-price">
                  <p>{item.price}</p>
                </div>
                <div className="main__card-box">
                  <div className="main__card-basket">
                    <Link><SlBasket/></Link>
                  </div>
                  <div className="main__card-btn">
                    <button className='card-btn'>Muddatli to'lov</button>
                  </div>
                </div>
          </div>
        )
      })}
    <div className="home__img-book main__card">
      <img src="https://olcha.uz/image/272x444/homePage/GMRdEUcw8BPJKxDcDW5dqZSiWyEl7uPTsRZ0aVPWF8PqzrCDCmqOKPSNjK1C.png" alt="" width={200} />
    </div>
    {AllData.books.slice(4,9).map((item)=>{
        return(
          <div className="main__card" key={item.id}>
              
                <div className="main__card-img">
                  <Link><AiOutlineHeart/></Link>
                  <img src={item.img} alt="" />
                </div>
                <div className="main__card-name">
                  <h5>{item.name.slice(0,20)}...</h5>
                </div>
                <div className="main__card-price">
                  <p>{item.price}</p>
                </div>
                <div className="main__card-box">
                  <div className="main__card-basket">
                    <Link><SlBasket/></Link>
                  </div>
                  <div className="main__card-btn">
                    <button className='card-btn'>Muddatli to'lov</button>
                  </div>
                </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeBook
