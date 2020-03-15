import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import ImageWrap from "../image-wrap"
import ProjectWrap from "../project-wrap"
import Icons from "./icons"
import DescriptionWrap from "../description-wrap"

const GFonts = () => {
  const data = useStaticQuery(graphql`
    query GFonts {
      img: file(name: { eq: "GFonts" }) {
        id
        childImageSharp {
          id
          fluid(maxWidth: 2080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ProjectWrap>
      <ImageWrap>
        <h1 className="project-name">Google Fonts</h1>
        <a
          className="image-link"
          href="https://chingu-solo.github.io/solo-koala-77/"
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
          A reproduction of the Google Fonts website with most of its features
          i.e. font search, custom text, dark mode
        </p>
        <Icons />
      </DescriptionWrap>
    </ProjectWrap>
  )
}

export default GFonts
