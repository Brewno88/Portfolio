import React from "react"
import styled from "styled-components"
import { respondTo } from "../../mixins/_respondTo"

const ProjectWrap = ({ ...props }) => {
  return (
    <MyProjectWrap>
      {props.children}
      {console.log(window.orientation)}
    </MyProjectWrap>
  )
}

//* styled-component < 💅>
const MyProjectWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    ${respondTo.mobileS`

  `}
  ${respondTo.mobileM`

  `}
  ${respondTo.mobileL`

  `}
  ${respondTo.tablet`

  `}

  @media (orientation: landscape){
    flex-direction: row;
  }
`

export default ProjectWrap
