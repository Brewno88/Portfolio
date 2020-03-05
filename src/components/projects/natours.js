import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Natours = () => {
  const data = useStaticQuery(graphql`
    query natours {
      img: file(name: { eq: "natours" }) {
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

export default Natours
