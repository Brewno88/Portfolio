import React from "react"

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
        <Main>
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
  text-align: center;

  .sections-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1050px) and (max-width: 1400px) {
      justify-content: flex-start;
    }
  }
  .section-wrap {
    width: 35rem;
    display: flex;
    flex-direction: column;
  }
`

export default Skills
