import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import Slider from "../components/projects/slider"
// import AwesomeSlider from "react-awesome-slider"
// import "react-awesome-slider/dist/styles.css"
// import GFonts from "../components/projects/googleFonts/GFonts"
// import YoutubeAPI from "../components/projects/youtubeAPI"
// import PigsGame from "../components/projects/pigsGame"
// import Natours from "../components/projects/natours"
// import Omnifood from "../components/projects/omnifood"

const Projects = ({ ...props }) => {
  return (
    <Wrap>
      <Layout>
        <SEO title="Page two" />
        <Main className="works-wrap">
          <Slider />
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .works-wrap {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`

export default Projects
