import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import TextIntro from "../components/textIntro"
import SEO from "../components/seo"
import Main from "../components/main"

const IndexPage = ({ ...props }) => {
  const [isMyNameGreen, setIsMyNameGreen] = useState(true)

  return (
    <Wrap className="index" isMyNameGreen={isMyNameGreen}>
      <Layout>
        <SEO title="Home" />
        <Main>
          <TextIntro innerText="Hi!" />
          <TextIntro innerText="I am">
            {" "}
            <span
              className="my-name"
              onMouseEnter={() => setIsMyNameGreen(false)}
              onMouseLeave={() => setIsMyNameGreen(true)}
            >
              Vincenzo
            </span>
          </TextIntro>
          <TextIntro innerText="a">
            {" "}
            <span
              className="my-role"
              onMouseEnter={() => setIsMyNameGreen(false)}
              onMouseLeave={() => setIsMyNameGreen(true)}
            >
              Front End Developer
            </span>
          </TextIntro>
          <TextIntro innerText="and this is my">
            {" "}
            <MySpace className="my-space">_</MySpace>
            {""} !
          </TextIntro>
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .my-name {
    color: ${props =>
      props.isMyNameGreen ? "var(--light-bright-green);" : "var(--pink);"};
    text-shadow: ${props =>
      props.isMyNameGreen
        ? "var(--pink) 2px 2px 1px;"
        : "var(--light-bright-green) 2px 2px 1px;"};
    transition: all 0.3s;
  }
  .my-role {
    color: ${props =>
      props.isMyNameGreen ? "var(--pink);" : "var(--light-bright-green);"};
    text-shadow: ${props =>
      props.isMyNameGreen
        ? "var(--light-bright-green) 2px 2px 1px;"
        : "var(--pink) 2px 2px 1px;"};
    transition: all 0.3s;
  }
`
const blink = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
    }
`
const MySpace = styled.span`
  color: var(--grapefruit);
  text-shadow: 3px 3px 1px var(--off-white);
  animation: ${blink} 1s infinite;
  transition: all 1s;
`

export default IndexPage
