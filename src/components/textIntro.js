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
  font-family: Krungthep;
  font-size: 70px;
  line-height: 1.27;
  text-align: center;
  color: var(--off-white);
  cursor: default;
  width: max-content;
`

export default TextIntro
