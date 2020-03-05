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
      <GFonts />
      <YoutubeAPI />
      <PigsGame />
      <Natours />
      <Omnifood />
      <h1>coajseoefsaijo</h1>
    </AwesomeSlider>
  )
}
//* styled-component < 💅>
const Wrap = styled.div``

export default Slider
