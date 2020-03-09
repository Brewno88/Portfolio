import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconsWrap from "../icons-wrap"

const Icons = () => {
  const data = useStaticQuery(graphql`
    query youtubeIcons {
      react: file(name: { eq: "5-react" }) {
        id
        name
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ajax: file(name: { eq: "8-ajax" }) {
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
      google: file(name: { eq: "google" }) {
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
