import React from "react"
import styled from "styled-components"
import { respondTo } from "../../mixins/respondTo"

const Icon = ({ ...props }) => {
  return <MyIcons className={props.className}>{props.children}</MyIcons>
}

//* styled-component < 💅>
const MyIcons = styled.div`
  h1 {
    color: var(--pink);
    text-shadow: .1rem .1rem .1rem var(--light-bright-green);
    font-size: 2rem;

        ${respondTo.mobileS`
      font-size: 2rem;
      `}
      ${respondTo.mobileM`
      font-size: 3rem;
      `}
      ${respondTo.mobileL`
      font-size: 3.5em;
      `}
      ${respondTo.tablet`
      font-size: 5em;
      `}
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .icon {
      margin: 0.5rem;
      height: 2rem;
    }
    img {
      margin: 0;
    }
  }
`

export default Icon
