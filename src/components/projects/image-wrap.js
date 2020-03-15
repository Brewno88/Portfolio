import React from "react"
import styled from "styled-components"

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
  h1 {
    color: var(--pink);
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-size: 3rem;
  }
  .project-image {
    border-radius: 3rem;

    @media (min-height: 250px) {
      width: 100%;
    }
  }
`

export default ImageWrap
