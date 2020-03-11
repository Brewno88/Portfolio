import React from "react"
import styled from "styled-components"

const ProjectWrap = ({ ...props }) => {
  return <MyProjectWrap>{props.children}</MyProjectWrap>
}

//* styled-component < 💅>
const MyProjectWrap = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: inherit;
`

export default ProjectWrap
