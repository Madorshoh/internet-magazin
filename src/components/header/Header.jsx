import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import{BiMenu,BiSearchAlt} from 'react-icons/Bi'
import {AiOutlineClose, AiOutlineHeart, AiOutlineUserAdd} from "react-icons/ai"
import { SlBasket } from 'react-icons/sl'
import { useState } from 'react'
import { MyContext } from '../search/Search'
import './header.css'


const Header = () => {
  const [menu, setMenu]= useState(true)
  const handleMenu = () =>{
    setMenu(!menu)
  }

  const[scroll ,setScroll]= useState(0)

  useEffect(() => {
    const onScroll =()=>{
      setScroll(window.pageYOffset)
    }
    window.addEventListener("scroll",onScroll)
    return () => window.removeEventListener("scroll",onScroll)
  }, []);


  return (
    <MyContext.Consumer>
      {(x)=>{
        return(
          <div className="container">
          <div className="header">
            <div className={scroll>80 ? "header__container header__scroll":"header__container"}>
                
                <div className="header__logo">
                  <Link to={"/"}>Bozor</Link>
                </div>

                <div onClick={handleMenu} className={menu ? "header__katalog":"header__katalog katalog__active"} >
                  {menu ? <BiMenu className='katalog-icon'/> :<AiOutlineClose className='katalog-icon-close'/>}
                    Katalog
                </div>

                <div className="header__search">
                  <BiSearchAlt className='katalog-icon katalog-icon-search'/>
                  <input 
                    type="search" placeholder='Qidirish...' 
                    onChange={(e)=>x.setWord(e.target.value)}
                  />
                </div>

                <div className="navbar">
                  <div className="header__heart">
                    <AiOutlineHeart/>
                  </div>

                  <div className="header__savatcha">
                    <SlBasket/>
                  </div>

                  <div className="header__kirish">
                    <AiOutlineUserAdd/>
                  </div>
                </div>
            </div>

          </div>
          <div className={menu ? "katalog":"katalog menu__active"}>
            <Link to={"/categoriy/telefon"} onClick={handleMenu} className={menu ? "katalog__items":"katalog__items katalog__active"}>Telefon</Link>
            <Link to={"/categoriy/televizor"} onClick={handleMenu} className={menu ? "katalog__items":"katalog__items katalog__active"}>Televizor</Link>
            <Link to={"/categoriy/washing"} onClick={handleMenu} className={menu ? "katalog__items":"katalog__items katalog__active"}>Kir yuvish mashinalari</Link>
            <Link to={"/categoriy/books"} onClick={handleMenu} className={menu ? "katalog__items":"katalog__items katalog__active"}>Kitoblar</Link>
            <Link to={"/categoriy/toy"} onClick={handleMenu} className={menu ? "katalog__items":"katalog__items katalog__active"}>O'yinchoqlar</Link>
          </div>
        </div>
        )
      }}
    </MyContext.Consumer>
  )
}

export default Header
