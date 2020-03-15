import React from "react"
import styled from "styled-components"
import { respondTo } from "../../mixins/_respondTo"

const ImageWrap = ({ ...props }) => {
  return <MyImageWrap>{props.children}</MyImageWrap>
}

//* styled-component < 💅>
const MyImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  margin-right: 5%;

  @media (orientation: portrait) {
    margin-right: 0;
  }

  h1 {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-size: 2rem;

      ${respondTo.mobileS`
      font-size: 2rem;
      `}
      ${respondTo.mobileM`
      font-size: 2.5rem;
      `}
      ${respondTo.mobileL`
      font-size: 2.7rem;
      `}
      ${respondTo.tablet`
      font-size: 3rem;
      `}
  }
  .project-image {
    border-radius: 3rem;
  }
`

export default ImageWrap
