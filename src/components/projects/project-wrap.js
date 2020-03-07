import React from "react"
import styled from "styled-components"

const ProjectWrap = ({ ...props }) => {
  return <MyProjectWrap>{props.children}</MyProjectWrap>
}

//* styled-component < 💅>
const MyProjectWrap = styled.div`
  display: flex;
`

export default ProjectWrap
