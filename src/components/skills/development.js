import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconsWrap from "./icons-wrap.js"

const Development = () => {
  const data = useStaticQuery(graphql`
    query development {
      icon: allFile(
        filter: { relativeDirectory: { eq: "icons/development" } }
      ) {
        nodes {
          id
          childImageSharp {
            fixed(height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <IconsWrap className="development section-wrap">
      <h1 className="header">Development</h1>
      <div className="icons">
        {data.icon.nodes.map(icon => {
          return (
            <div>
              <Img
                className="icon"
                fixed={icon.childImageSharp.fixed}
                key={icon.childImageSharp.id}
              />
            </div>
          )
        })}
      </div>
    </IconsWrap>
  )
}

export default Development
