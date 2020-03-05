import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Omnifood = () => {
  const data = useStaticQuery(graphql`
    query omnifood {
      img: file(name: { eq: "omnifood" }) {
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

export default Omnifood
