import React from "react"
import styled from "styled-components"

const DescriptionWrap = ({ ...props }) => {
  return <MyDescriptionWrap>{props.children}</MyDescriptionWrap>
}

//* styled-component < 💅>
const MyDescriptionWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: var(--white);
    font-weight: 500;
    font-size: 2rem;
    flex: 1;
    display: flex;
    align-items: center;
    line-height: 1.5;
  }
`

export default DescriptionWrap
