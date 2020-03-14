import React from "react"
import styled from "styled-components"

const IconsWrap = ({ children }) => {
  return <MyIconsWrap>{children}</MyIconsWrap>
}

//* styled-component < 💅>
const MyIconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .icon {
    width: 10%;
    margin: 0 0.2rem;
  }
`

export default IconsWrap
