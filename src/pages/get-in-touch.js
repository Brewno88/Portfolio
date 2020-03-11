import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const GetInTouch = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="getInTouch-main">
          <form name="contact" method="post">
            <h1>Your Email</h1>
            <input type="text" name="name" />
            <h1>You Message</h1>
            <textarea name="message" />
            <button>Send</button>
          </form>
        </Main>
      </Layout>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    color: var(--light-bright-green);
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    margin-top: 3rem;
  }

  form {
    width: 100%;
    /* margin-left: 10%; */
  }

  input {
    border-radius: 5rem;
    border: none;
    width: 100%;
    height: 2rem;
    padding: 2rem;
    font-size: 1.5rem;
  }

  textarea {
    border: none;
    border-radius: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    resize: none;
    width: 100%;
    height: 40vh;
  }
  button {
    font-size: 1.5rem;
    border-radius: 50px;
    border: none;
    background: var(--gunmetal);
    color: var(--light-bright-green);
    width: 7rem;
    height: 3rem;
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 0.1rem var(--pink);

    &:hover {
      transform: translate3D(0.2rem, 0.2rem, 0.2rem);
      /* transform: translateY(3px); */
    }
  }
`

export default GetInTouch
