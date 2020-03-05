import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const YoutubeAPI = () => {
  const data = useStaticQuery(graphql`
    query youtube {
      img: file(name: { eq: "youtubeAPI" }) {
        id
        childImageSharp {
          id
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.img.childImageSharp.fixed} />
}

//* styled-component < 💅>
const Wrap = styled.div``

export default YoutubeAPI
