import React from 'react'
import Carusel from '../../components/carusel/Carusel'
import Contentimg from '../../components/contentImg/Contentimg'
import Main from '../../components/main/Main'
import Content from '../../components/video/Video'
import './home.css'
import ContentImgTwo from '../../components/contentImg/ContentImg__two'
import ContentImgthree from '../../components/contentImg/ContentImg__three'
import HomeWashing from '../../components/homeWashing/HomeWashing'
import HomeBook from '../../components/homeBook/HomeBook'
import Footer from '../../components/footer/Footer'
import { MyContext } from '../../components/search/Search'

const Home = () => {
  return (
    <MyContext.Consumer>
      {(x)=>{
        return(
          <div className="container">
            <div className='home__container'>
              <Carusel/>
              <Contentimg/>
              <Main/>
              <Content />
              <ContentImgTwo/>
              <ContentImgthree/>
              <HomeWashing/>
              <HomeBook/>
              <Footer/>
            </div>
          </div>
        )
      }}
    </MyContext.Consumer>
  )
}

export default Home
