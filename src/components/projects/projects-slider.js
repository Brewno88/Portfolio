import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import GFonts from "./googleFonts/GFonts"
import YoutubeAPI from "./youtubeAPI/youtubeAPI"
import PigsGame from "./pigsGame/pigsGame"
import Natours from "./natours/natours"
import Omnifood from "./omnifood/omnifood"

const Slider = () => {
  return (
    <AwesomeSlider>
      <div className="outerWrap">
        <GFonts />
      </div>
      <div className="outerWrap">
        <YoutubeAPI />
      </div>
      <div className="outerWrap">
        <PigsGame />
      </div>
      <div className="outerWrap">
        <Natours />
      </div>
      <div className="outerWrap">
        <Omnifood />
      </div>
    </AwesomeSlider>
  )
}

export default Slider
