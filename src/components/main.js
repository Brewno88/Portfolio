import React from "react"
import styled from "styled-components"

const Main = ({ ...props }) => {
  return <MyMain className={props.className}>{props.children}</MyMain>
}

//* styled-component < 💅>
const MyMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`

export default Main
