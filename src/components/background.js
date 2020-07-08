import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Background = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath: { eq: "thomas-tastet.jpg" }) {
        id
        childImageSharp {
          id
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.image.childImageSharp.fluid
  return (
    <Wrap fluid={imageData} className="background">
      {props.children}
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
`

export default Background
