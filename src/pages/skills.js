import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Development from "../components/skills/development"
import Design from "../components/skills/Design"
import Others from "../components/skills/Others"
import Tech from "../components/skills/Tech"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const Skills = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="skills-wrap">
          <div className="sections-wrap">
            <Development />
            <Design />
            <Others />
            <Tech />
          </div>
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .skills-wrap {
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
  }
  .sections-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 3rem;
  }
  .section-wrap {
    width: 19%;
    display: flex;
    flex-direction: column;
  }
`

export default Skills
