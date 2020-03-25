import React from "react"
import styled from "styled-components"
import { respondTo } from "../mixins/respondTo"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"

const About = ({ ...props }) => {
  return (
    <Layout path={props.path}>
      <MyMain className="about-main">
        <SEO title="Page two" />
        <p className="about-text">
          I am a self-taught Front End Developer from Italy. 🇮🇹
          <br />
          <br />
          I moved to London in 2013 where I still live. <br />
          From 2015 to 2019 I ran, together with my friends, a craft beer
          brewery called <a href="#appearance">Brewheadz,</a> where I managed
          sales, marketing and design. <br /> <br />
          In November 2019, in order to gain professional experience, I started
          to work as an intern at{" "}
          <a href="https://www.highdigital.co.uk/index.html">High Digital.</a>
          <br />
          Here I create and maintain websites, components, animations and other
          functionality using mainly React and Gatsby.
          <br />
          <br />
          I am constantly looking for exciting projects to which I can
          contribute with my knowledge and my passion.
          <br />
          <br />
          Don't hesitate to <Link to="/get-in-touch"> get in touch</Link> with
          me if you need my help! 🙃
        </p>

        <Appearance id="appearance">
          <h1>Here you can see/hear me talking about beer! 🍻</h1>
          <div className="appearance-grid">
            <iframe
              className="embed-video"
              src="https://www.youtube.com/embed/m6Hsg0HxTc4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            />
            <iframe
              className="embed-audio"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329498737&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
            <iframe
              className="embed-audio"
              src="https://open.spotify.com/embed-podcast/episode/710hdXpYc4LyR7zLE4HXkU"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>
        </Appearance>
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`
  ${respondTo.tabletS`
    width: 90%;
    justify-content: start;
  `}
  ${respondTo.laptop`
    width: 80%;
  `}
  p {
    color: var(--off-white);
    font-size: 2rem;
    line-height: 1.3;
  }

  .embed-video {
    grid-row-start: 1;
    grid-row-end: 3;
    width: 100%;
    height: 95%;
  }

  .embed-audio {
    grid-column-start: 2;
    height: 100%;
    width: 100%;
  }
`

const Appearance = styled.div`
  width: 100%;
  margin: 3rem 0;
  .appearance-grid {
    display: flex;
    flex-direction: column;

    ${respondTo.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2%;
    height: 35rem;
    `}
  }
`

export default About
