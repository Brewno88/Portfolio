import React from "react"

import styled from "styled-components"
import { respondTo } from "../mixins/respondTo"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Development from "../components/skills/development"
import Design from "../components/skills/design"
import Others from "../components/skills/others"
import Tech from "../components/skills/tech"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const Skills = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="skills-main">
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
  width: 100%;
  height: 100%;
  text-align: center;

  .skills-main {
    justify-content: end;
      ${respondTo.mobileS`
      justify-content: end;
      `}
      ${respondTo.mobileM`
      justify-content: end;
      `}
      ${respondTo.mobileL`
      justify-content: center;
      `}
      ${respondTo.tablet`
      justify-content: center;
      `}
  }
  .sections-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 95%;

    @media (max-height: 420px) {
      flex-direction: row;
    }
  }
  .section-wrap {
    display: flex;
    flex-direction: column;
  }
`

export default Skills
