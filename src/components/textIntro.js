import React from "react"
import styled from "styled-components"

const TextIntro = ({ ...props }) => {
  return (
    <Wrap>
      {props.innerText}
      {props.children}
    </Wrap>
  )
}

//* styled-component < 💅>
const Wrap = styled.h1`
  font-family: Krungthep;
  font-size: 70px;
  line-height: 1.27;
  text-align: center;
  color: var(--off-white);
`

export default TextIntro
