import React from 'react'
import VideoHome from '../../assets/homeviddeo.mp4'
import './video.css'

const Video = () => {
  return (
    <div className='video__container'>
      <video src={VideoHome} autoPlay loop muted className='home__video'/>
    </div>
  )
}

export default Video
