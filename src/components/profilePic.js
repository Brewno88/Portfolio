import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query profileImg {
      profileImg: file(name: { eq: "profileImg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <_Link to="/">
      <MyImg fluid={data.profileImg.childImageSharp.fluid} />
    </_Link>
  )
}

//* styled-component < 💅>

const _Link = styled(Link)`
  width: 7rem;
  margin: 2%;
`

const MyImg = styled(Img)``
export default ProfilePic
