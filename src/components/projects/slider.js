import React from "react"
import styled from "styled-components"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import GFonts from "./googleFonts/GFonts"
import YoutubeAPI from "./youtubeAPI"
import PigsGame from "./pigsGame"
import Natours from "./natours"
import Omnifood from "./omnifood"

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
//* styled-component < 💅>
const Wrap = styled.div``

export default Slider
