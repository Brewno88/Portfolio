import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"

import { respondTo } from "../mixins/_respondTo"

const HobbyText = () => {
  const Hobbies = [
    "Coding 👨🏻‍💻",
    "Basketball 🏀",
    "Cooking 👨🏻‍🍳",
    "Manga 📚",
    "Games 🕹",
    "Holidays 🏖",
  ]
  return (
    <_HobbyText>
      <span>I like </span>
      <TextLoop className="loop" children={Hobbies} interval={2000} />
    </_HobbyText>
  )
}

//* styled-component < 💅>
const _HobbyText = styled.span`
  color: var(--off-white);
  font-size: 2rem;
  display: flex;

align-items: center;

flex: 1;

  .loop {
    color: var(--light-bright-green);
  }

  span{
    white-space: pre-wrap;
  }

  ${respondTo.mobileS`
  font-size: 2.5rem;
  `}
  ${respondTo.mobileM`
  font-size: 3rem;
  `}
  ${respondTo.mobileL`
  font-size: 4em;
  `}
  ${respondTo.tablet`
  font-size: 4.5em;
  `}
`

export default HobbyText
