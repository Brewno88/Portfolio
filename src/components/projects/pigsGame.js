import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const PigsGame = () => {
  const data = useStaticQuery(graphql`
    query pigs {
      img: file(name: { eq: "pigsGame" }) {
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
  console.log(data)
  return <Img fixed={data.img.childImageSharp.fixed} />
}

//* styled-component < 💅>
const Wrap = styled.div``

export default PigsGame
