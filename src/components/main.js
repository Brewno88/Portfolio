import React from "react"
import styled from "styled-components"

const Main = ({ ...props }) => {
  return <_Main className={props.className}>{props.children}</_Main>
}

//* styled-component < 💅>
const _Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export default Main
