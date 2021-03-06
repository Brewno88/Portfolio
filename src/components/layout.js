/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { createGlobalStyle } from "styled-components"
import Background from "../components/background"
import ProfilePic from "./profilePic"
import SocialLinks from "./socialLinks"

import "./layout.css"

const Layout = ({ ...props }) => {
  return (
    <Wrap>
      <Background>
        <GlobalStyle />
        <Header>
          <SocialLinks />
          <ProfilePic />
        </Header>
        <Footer />
        {props.children}
      </Background>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
:root {
  --pink: #ff79c6;
  --light-bright-green: #50fa7b;
  --grapefruit: #ff5555;
  --off-white: #f8f8f2;
  --gunmetal: #44475a;
  --white: #ffffff;
  --black: #000000;
  --main-font: 'Kalam';
}

html,
body {
  /* margin: 0; */
  height: 100%;
  background: var(--black);
  font-size: 62.5%;
  font-family: var(--main-font), cursive;
}
h1, h2, h3, h4, h5, h6, a{
  font-family: var(--main-font), cursive;
  color: var(--light-bright-green);
  text-shadow: .07rem .07rem .1rem var(--pink);
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;

}
body #___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
}
`
export default Layout
