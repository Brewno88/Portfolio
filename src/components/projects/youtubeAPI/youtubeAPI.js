import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import ImageWrap from "../image-wrap"
import ProjectWrap from "../project-wrap"
import Icons from "./icons"
import DescriptionWrap from "../description-wrap"

const YoutubeAPI = () => {
  const data = useStaticQuery(graphql`
    query youtube {
      img: file(name: { eq: "youtube" }) {
        id
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ProjectWrap>
      <ImageWrap>
        <h1 className="project-name">Youtube API</h1>
        <a
          className="image-link"
          href="https://brewno88.github.io/youtube-api-app/"
          target="blank"
        >
          <Img
            className="project-image"
            fluid={data.img.childImageSharp.fluid}
          />
        </a>
      </ImageWrap>
      <DescriptionWrap>
        <p className="description">
          A simple video loader using the Youtube API
        </p>
        <Icons />
      </DescriptionWrap>
    </ProjectWrap>
  )
}

export default YoutubeAPI
