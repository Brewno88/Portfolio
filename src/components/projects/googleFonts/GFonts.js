import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectWrap from "../project-wrap"
import Icons from "./icons"

const GFonts = props => {
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
  console.log(data)
  return (
    <Wrap>
      <ProjectWrap>
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
      </ProjectWrap>
      <IconsWrap>
        <p className="description">
          This project reproduces the Google Fonts website's look and most of
          its functionalities.
        </p>
        <Icons />
      </IconsWrap>
    </Wrap>
  )
}

//* styled-component < 💅>
const IconsWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: var(--white);
    font-weight: 500;
    font-size: 2rem;
    flex: 1;
    display: flex;
    align-items: center;
    line-height: 1.5;
  }
`
const Wrap = styled.div`
  display: flex;
  width: 80%;
`

export default GFonts
