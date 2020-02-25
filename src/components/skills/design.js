import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconsWrap from "./icons-wrap.js"

const Development = () => {
  const data = useStaticQuery(graphql`
    query design {
      icon: allFile(filter: { relativeDirectory: { eq: "icons/design" } }) {
        nodes {
          id
          childImageSharp {
            fixed(quality: 100, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <IconsWrap className="design section-wrap">
      {" "}
      <h1 className="header">Design</h1>
      <div className="icons">
        {data.icon.nodes.map(icon => {
          return (
            <Img
              className="icon"
              fixed={icon.childImageSharp.fixed}
              key={icon.childImageSharp.id}
            />
          )
        })}
      </div>
    </IconsWrap>
  )
}

//* styled-component < 💅>

export default Development
