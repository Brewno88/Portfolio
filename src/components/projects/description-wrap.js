import React from "react"
import styled from "styled-components"
import { respondTo } from "../../mixins/respondTo"

const DescriptionWrap = ({ ...props }) => {
  return <MyDescriptionWrap>{props.children}</MyDescriptionWrap>
}

//* styled-component < 💅>
const MyDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45%;

  @media (orientation: portrait){
    width: 100%
  }

  p {
    color: var(--white);
    font-weight: 500;
    line-height: 1.5;
    font-size: 1rem;

      ${respondTo.mobileS`
      font-size: 1.5rem;
      `}
      ${respondTo.mobileM`
      font-size: 1.5rem;
      `}
      ${respondTo.mobileL`
      font-size: 2rem;
      `}
      ${respondTo.tablet`
      font-size: 2rem;
      `}
  }
`

export default DescriptionWrap
