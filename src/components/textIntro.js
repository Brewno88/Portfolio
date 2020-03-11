import React from "react"
import styled from "styled-components"

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
  font-size: 3rem;
  line-height: 1.5;
  text-align: center;
  color: var(--off-white);
  cursor: default;
  width: 100%;
`

export default TextIntro
