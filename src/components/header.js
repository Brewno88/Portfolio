import React from "react"
import styled from "styled-components"

const Header = ({ children }) => {
  return <MyHeader>{children}</MyHeader>
}

//* styled-component < 💅>
const MyHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default Header
