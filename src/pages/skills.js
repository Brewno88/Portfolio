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
    <Layout path={props.path}>
      <SEO title="Page two" />
      <MyMain className="skills-main">
        <div className="sections-wrap">
          <Development />
          <Design />
          <Others />
          <Tech />
        </div>
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`
  text-align: center;
  .skills-main {
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
    justify-content: center;
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
