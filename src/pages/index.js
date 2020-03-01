import React, { useState } from "react"
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
              role="button" // this to fix the 'jsx-a11y/no-static-element-interactions' rule
              tabIndex={0} // Buttons are interactive controls and thus focusable. If the button role is added to an element that is not focusable by itself (such as <span>, <div> or <p>) then, the tabindex attribute has to be used to make the button focusable.
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
              role="button"
              tabIndex={0}
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
        ? "var(--pink) .2rem .2rem .1rem;"
        : "var(--light-bright-green) 2px 2px .1rem;"};
    transition: all 0.3s;
  }
  .my-role {
    color: ${props =>
      props.isMyNameGreen ? "var(--pink);" : "var(--light-bright-green);"};
    text-shadow: ${props =>
      props.isMyNameGreen
        ? "var(--light-bright-green) .2rem .2rem .1rem;"
        : "var(--pink) .2rem .2rem .1rem;"};
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
  text-shadow: 0.3rem 0.3rem 0.1rem var(--off-white);
  animation: ${blink} 1s infinite;
  transition: all 1s;
`

export default IndexPage
