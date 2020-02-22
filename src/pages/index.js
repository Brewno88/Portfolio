import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import TextIntro from "../components/textIntro"
import Main from "../components/main"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Wrap className="index">
      <Layout />
      <SEO title="Home" />
      <Main>
        <TextIntro innerText="Hi!" />
        <TextIntro innerText="I am">
          {" "}
          <span className="my-name">Vincenzo</span>
        </TextIntro>
        <TextIntro innerText="a">
          {" "}
          <span className="my-role">Front End Developer</span>
        </TextIntro>
        <TextIntro innerText="and this is my">
          {" "}
          <MySpace className="my-space">_</MySpace>
          {""} !
        </TextIntro>
      </Main>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .my-name {
    color: var(--light-bright-green);
    text-shadow: 2px 2px 1px var(--pink);

    &:hover {
      color: var(--pink);
      text-shadow: 2px 2px 1px var(--light-bright-green);
    }
  }
  .my-role {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    &:hover {
      color: var(--light-bright-green);
      text-shadow: 2px 2px 1px var(--pink);
    }
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
`

export default IndexPage
