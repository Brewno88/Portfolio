import React from "react"
import styled from "styled-components"

const Header = ({ children }) => {
  return <MyHeader>{children}</MyHeader>
}

//* styled-component < 💅>
const MyHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export default Header
