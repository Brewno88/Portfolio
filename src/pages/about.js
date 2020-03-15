import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import HobbyText from "../components/hobbyText"

const About = ({ ...props }) => {
  return (
    <MyAbout>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <MyMain className="about-main"></MyMain>
      </Layout>
    </MyAbout>
  )
}

const MyAbout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MyMain = styled(Main)``

export default About
