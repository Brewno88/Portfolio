import React from "react"
import styled from "styled-components"
import { respondTo } from "../mixins/_respondTo"

const TextIntro = ({ ...props }) => {
  return (
    <Wrap className={"text-intro"}>
      {props.innerText}
      {props.children}
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  font-size: 8em;
  `}
`

export default TextIntro
