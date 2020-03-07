import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import ImageWrap from "../image-wrap"
import ProjectWrap from "../project-wrap"
import Icons from "./icons"
import DescriptionWrap from "../description-wrap"

const Omnifood = () => {
  const data = useStaticQuery(graphql`
    query omnifood {
      img: file(name: { eq: "omnifood" }) {
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
        <h1 className="project-name">Omnifood</h1>
        <a
          className="image-link"
          href="https://brewno88.github.io/Omnifood-Project/"
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
          This project reproduces the Google Fonts website's look and most of
          its functionalities.
        </p>
        <Icons />
      </DescriptionWrap>
    </ProjectWrap>
  )
}

export default Omnifood