import React from "react"
import styled from "styled-components"
import { respondTo } from "../mixins/_respondTo"

const MainText = ({ ...props }) => {
  return (
    <_MainText style={props.style}>
      {props.innerText}
      {props.children}
    </_MainText>
  )
}

//* styled-component < 💅>
const _MainText = styled.span`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  color: var(--off-white);
  cursor: default;
  width: 100%;

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
  font-size: 7em;
  `}
`

export default MainText
