import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__logo">
        <Link to={"/"}>Bozor</Link>
      </div>
      <div className="footer__info">
        <h2>Aloqa</h2>
        <h3><span>Telefon nomer: </span> +998 90 149 20 40</h3>
      </div>
    </div>
  )
}

export default Footer
