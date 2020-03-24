import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import MainText from "../components/mainText"
import SEO from "../components/seo"
import Main from "../components/main"

const IndexPage = ({ ...props }) => {
  const [isMyNameGreen, setIsMyNameGreen] = useState(1)

  return (
    <Layout>
      <SEO title="Home" />
      <MyMain className="index-main" isMyNameGreen={isMyNameGreen}>
        <MainText innerText="Hi!" />
        <MainText innerText="I am">
          <span
            className="my-name"
            onMouseEnter={() => setIsMyNameGreen(0)}
            onMouseLeave={() => setIsMyNameGreen(1)}
            role="button" // this to fix the 'jsx-a11y/no-static-element-interactions' rule
            tabIndex={0} // Buttons are interactive controls and thus focusable. If the button role is added to an element that is not focusable by itself (such as <span>, <div> or <p>) then, the tabindex attribute has to be used to make the button focusable.
          >
            Vincenzo,
          </span>
        </MainText>
        <MainText innerText="a">
          <span
            className="my-role"
            onMouseEnter={() => setIsMyNameGreen(0)}
            onMouseLeave={() => setIsMyNameGreen(1)}
            role="button"
            tabIndex={0}
          >
            Front End Developer
          </span>
        </MainText>
        <MainText innerText="and this is my">
          <MySpace className="my-space">_</MySpace>!
        </MainText>
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`
  .my-name {
    margin-left: 1rem;
    color: ${props =>
      props.isMyNameGreen ? "var(--light-bright-green);" : "var(--pink);"};
    text-shadow: ${props =>
      props.isMyNameGreen
        ? "var(--pink) .1rem .1rem .1rem;"
        : "var(--light-bright-green) .1rem .1rem  .1rem;"};
    transition: all 0.3s;
  }
  .my-role {
    margin-left: 1rem;
    color: ${props =>
      props.isMyNameGreen ? "var(--pink);" : "var(--light-bright-green);"};
    text-shadow: ${props =>
      props.isMyNameGreen
        ? "var(--light-bright-green) .1rem .1rem .1rem;"
        : "var(--pink) .1rem .1rem .1rem;"};
    transition: all 0.3s;
  }
`
const blink = keyframes`
  from {
    opacity: .2
  }
  to {
    opacity: 0
    }
`
const MySpace = styled.span`
  margin: 0 1rem;
  color: transparent;
  text-shadow: 0.1rem 0.1rem 0.1rem var(--off-white);
  animation: ${blink} 1s infinite;
  transition: all 1s;
`

export default IndexPage
