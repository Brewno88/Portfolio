import React from "react"
import styled from "styled-components"

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
  display: flex;
  flex-direction: column;
  height: 100%;

  .projects-wrap {
    flex: 1;
    align-items: center;
    justify-content: center;

    /* react-awesome-slider style modifies */
    .awssld {
      height: 100%;
      .awssld__container {
        padding-bottom: 0;
      }
      .awssld__content {
        background-color: transparent;
      }
    }
  }
`

export default Projects
