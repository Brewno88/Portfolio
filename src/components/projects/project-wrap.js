import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ProjectWrap = ({ ...props }) => {
  return <MyProjectWrap>{props.children}</MyProjectWrap>
}

//* styled-component < 💅>
const MyProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-right: 5%;

  h1 {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  .project-image {
    margin: 0;
    border-radius: 3rem;
  }
`

export default ProjectWrap
