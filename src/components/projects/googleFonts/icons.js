import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Icons = () => {
  const data = useStaticQuery(graphql`
    query GFontsIcons {
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
    <Wrap>
      {Object.values(data).map(icon => {
        return <Img className="icon" fluid={icon.childImageSharp.fluid} />
      })}
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 100%;
  }
`

export default Icons
