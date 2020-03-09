import React from "react"
import styled from "styled-components"

const IconsWrap = ({ children }) => {
  return <MyIconsWrap>{children}</MyIconsWrap>
}

//* styled-component < 💅>
const MyIconsWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-evenly;

  .icon {
    width: 17%;
  }
`

export default IconsWrap
