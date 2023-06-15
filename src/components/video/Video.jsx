import React, { Component } from "react";
import './video.css'
    class Content extends Component {
      render() {
        return (
              <div className="video__container">
                  <video src="https://olcha.uz/image/original/homePage/kqbE6s0rjwXwyVPOmEFZ34fCDGwbnYb3egpq331hpupeSYeq7BlyeBBLpJ97.mp4" autoPlay={Infinity}/>
              </div>
        );
      }
    }

export default Content;