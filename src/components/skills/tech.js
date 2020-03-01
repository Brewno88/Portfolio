import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconsWrap from "./icons-wrap.js"

const Development = () => {
  const data = useStaticQuery(graphql`
    query tech {
      icon: allFile(filter: { relativeDirectory: { eq: "icons/tech" } }) {
        nodes {
          id
          childImageSharp {
            fixed(quality: 100, height: 57) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <IconsWrap className="tech section-wrap">
      {" "}
      <h1 className="¢#header">Tech</h1>
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
