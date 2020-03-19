import React from "react"
import styled from "styled-components"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { respondTo } from "../../mixins/respondTo"

import GFonts from "./googleFonts/GFonts"
import YoutubeAPI from "./youtubeAPI/youtubeAPI"
import PigsGame from "./pigsGame/pigsGame"
import Natours from "./natours/natours"
import Omnifood from "./omnifood/omnifood"

const Slider = () => {
  return (
    <MySlider>
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
    </MySlider>
  )
}

const MySlider = styled(AwesomeSlider)`
  .outerWrap {
    height: 80%;
    width: 90%;
      ${respondTo.mobileS`
        height: 70%;
        width: 80%;
      `}
      ${respondTo.mobileM`
        height: 70%;
        width: 80%;
      `}
      ${respondTo.mobileL`
        height: 75%;
        width: 85%;
      `}
      ${respondTo.tablet`
        height: 80%;
        width: 90%;
      `}

      @media (orientation: portrait) {
        width: 100%;
      }
  }
`

export default Slider
