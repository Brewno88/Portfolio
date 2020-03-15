import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"

import { respondTo } from "../mixins/_respondTo"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import TextIntro from "../components/textIntro"

const About = ({ ...props }) => {
  const Hobbies = [
    "Coding 👨🏻‍💻",
    "Basketball 🏀",
    "Cooking 👨🏻‍🍳",
    "Manga 📚",
    "Games 🕹",
    "Holidays 🏖",
  ]
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="about-main">
          <TextIntro innerText="I am a front End Developer from Italy" />
          <div className="textLoop-wrap">
            <TextIntro innerText="I like" />
            <TextLoop
              className="loop"
              children={Hobbies}
              interval={2000}
              springConfig={{ stiffness: 100, damping: 10 }}
            />
          </div>

          <article className="intro"></article>
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .textLoop-wrap {
    color: var(--off-white);
    margin-left: 5%;
    margin: 1.5rem 0;
    line-height: 3rem;
    text-align: center;
    width: 100%;

    .loop {
      color: var(--light-bright-green);
      /* text-shadow: var(--pink) 0.2rem 0.2rem 0.1rem; */
      font-size: 1.5rem;

      ${respondTo.mobileS`
      font-size: 2.5rem;
      `}
      ${respondTo.mobileM`
      font-size: 3rem;
      `}
      ${respondTo.mobileL`
      font-size: 5.5em;
      `}
      ${respondTo.tablet`
      font-size: 8em;
      `}
    }
  }
`

export default About
