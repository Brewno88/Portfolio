import React from "react"
import styled from "styled-components"

const ImageWrap = ({ ...props }) => {
  return <MyImageWrap>{props.children}</MyImageWrap>
}

//* styled-component < 💅>
const MyImageWrap = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  .project-image {
    margin: 0;
    border-radius: 3rem;
  }
`

export default ImageWrap
