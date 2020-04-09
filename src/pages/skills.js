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
      <SEO title="Skills" />
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
  justify-content: start;

      ${respondTo.mobileS`
      justify-content: center;
      `}
      ${respondTo.mobileM`
      justify-content: center;
      `}
      ${respondTo.mobileL`
      justify-content: center;
      `}
      ${respondTo.tablet`
      justify-content: center;
      `}

  .sections-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70vh;

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
