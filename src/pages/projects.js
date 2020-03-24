import React from "react"
import styled from "styled-components"
import { respondTo } from "../mixins/respondTo"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import ProjectSlider from "../components/projects/projects-slider"

const Projects = ({ ...props }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <MyMain className="projects-main">
        <ProjectSlider />
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`

  .projects-main {
    padding-bottom: 1rem;

    ${respondTo.mobileS`
      padding-bottom: 1rem;
    `}
    ${respondTo.mobileM`
    padding-bottom: 1rem;
    `}
    ${respondTo.mobileL`
    padding-bottom: 2rem;
    `}
    ${respondTo.tablet`
    padding-bottom: 5rem;
    `}
  }
  /* react-awesome-slider style modifies */
  .awssld {
    height: 80vh;
    .awssld__container {
      padding-bottom: 0;
      .awssld__content {
        background-color: transparent;
        display: flex;
        align-items: start;
        height: 100%;
        ${respondTo.tablet`
        align-items: center;
    `}
      }
    }

    .awssld__bullets {
      bottom: 3%;
    }
  }
`

export default Projects
