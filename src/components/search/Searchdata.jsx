import React from 'react'
import { SearchData } from '../../dataMagazine'

const Searchdata = () => {
  return (
    <div className='Search__data-contaiber'>
      {SearchData.map((item) => {
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
      })}
    </div>
  )
}

export default Searchdata
