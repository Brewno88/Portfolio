import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconsWrap from "../icons-wrap"

const Icons = () => {
  const data = useStaticQuery(graphql`
    query pigsIcons {
      html: file(name: { eq: "1-html5" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      css: file(name: { eq: "2-css3" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      javascript: file(name: { eq: "3-javascript" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sass: file(name: { eq: "4-sass" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      git: file(name: { eq: "9-git" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      github: file(name: { eq: "10-github" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <IconsWrap>
      {Object.values(data).map((icon, index) => {
        return (
          <Img
            className="icon"
            fluid={icon.childImageSharp.fluid}
            key={index}
          />
        )
      })}
    </IconsWrap>
  )
}

export default Icons
