import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { Link, useParams } from 'react-router-dom'
import {AllData} from '../../dataMagazine'
import './categoriy.css'
import { MyContext } from '../search/Search'



const Items = () => {
    let params = useParams().name
    const[data, setData]=useState([]);

    const getData = ()=>{
        setData(AllData[params])
    }
    useEffect(()=>{
        getData()
    })
    

    


  return (
      <MyContext.Consumer>
      {(x)=>{
        return(
          
        <div className="container">
          <div className='items__container'>
            {data.map((item)=>{
              if (x.search === false) {
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
              } else if (item.name.toLowerCase().includes(x.word.toLowerCase())) {
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
              }
            })}
        </div>
      </div>
        )
      }}
    </MyContext.Consumer>
  )
}

export default Items
