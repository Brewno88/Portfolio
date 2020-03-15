import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
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
  console.log(data)
  return <MyImg fluid={data.profileImg.childImageSharp.fluid} />
}

//* styled-component < 💅>
const MyImg = styled(Img)`
  width: 8rem;
  margin-left: 2%;
  margin-top: 2%;
`
export default ProfilePic
