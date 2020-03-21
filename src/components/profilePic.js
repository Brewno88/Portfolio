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
    <MyLink to="/">
      <MyImg fluid={data.profileImg.childImageSharp.fluid} />
    </MyLink>
  )
}

//* styled-component < 💅>

const MyLink = styled(Link)`
  width: 7rem;
  margin: 2%;
`

const MyImg = styled(Img)``
export default ProfilePic
