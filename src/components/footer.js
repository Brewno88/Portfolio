import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrap>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.div``

export default Footer
