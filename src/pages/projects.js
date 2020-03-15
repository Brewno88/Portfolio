import React from "react"
import styled from "styled-components"
import { respondTo } from "../mixins/_respondTo"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import ProjectSlider from "../components/projects/projects-slider"

const Projects = ({ ...props }) => {
  return (
    <Wrap>
      <Layout>
        <SEO title="Page two" />
        <Main className="projects-main">
          <ProjectSlider />
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100%;

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
    height: 100%;
    .awssld__container {
      padding-bottom: 0;
      .awssld__content {
        background-color: transparent;
        display: flex;
        align-items: center;
        height: 100%;
      }
    }

    .awssld__bullets {
      bottom: 0;
    }
  }
`

export default Projects
