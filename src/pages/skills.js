import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"

const About = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path} />
      <SEO title="Page two" />
    </Wrap>
  )
}

const Wrap = styled.div``

export default About
