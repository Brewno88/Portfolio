import React from "react"
import styled from "styled-components"

const Icon = ({ ...props }) => {
  return <MyIcons className={props.className}>{props.children}</MyIcons>
}

//* styled-component < 💅>
const MyIcons = styled.div`
  h1 {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-size: 3rem;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .icon {
      margin: 0.5rem;
    }
    img {
      margin: 0;
    }
  }
`

export default Icon
