/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled, { createGlobalStyle } from "styled-components"

import "./layout.css"

const Layout = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query bgImage {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              base64
              src
            }
          }
        }
      }
    }
  `)
  const [path, setPath] = useState("")

  useEffect(() => {
    setPath(props.path)
  })
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <GlobalStyle data={data} />
      <Header path={path} />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

const GlobalStyle = createGlobalStyle`
:root {
  --pink: #ff79c6;
  --light-bright-green: #50fa7b;
  --grapefruit: #ff5555;
  --off-white: #f8f8f2;
  --gunmetal: #44475a;
  --white: #ffffff;
  --black: #000000;
  --main-font: Krungthep;
}

html,
body {
  margin: 0;
  height: 100vh;
  background: var(--black);
}
html {
  font-family: var(--main-font);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding: 0.5rem;
}
body #___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
  background-image: url(
    ${props => props.data.allImageSharp.edges[11].node.fluid.src});
  background-size: cover;
  border-radius: 50px;
}
`

export default Layout
