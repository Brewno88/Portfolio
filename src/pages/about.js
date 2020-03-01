import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import TextIntro from "../components/textIntro"

const About = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main>
          <TextIntro innerText="I am a front End Developer from Italy" />
          <TextIntro innerText="I like to play Basketball" />
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .text-intro {
    font-size: 3rem;
  }
`

export default About
