import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const About = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="form-wrap">
          <form name="contact" method="post">
            <h1>Your Email</h1>
            <input type="text" name="name" />
            <h1>You Message</h1>
            <textarea name="message" rows="15" cols="70" />
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

  .form-wrap {
    justify-content: start;
    align-items: start;
  }

  h1 {
    color: var(--light-bright-green);
    text-shadow: 2px 2px 1px var(--pink);
  }

  form {
    width: 80%;
    width: 46%;
    margin: 10% 0 0 10%;
  }

  input {
    border-radius: 50px;
    border: none;
    width: 50%;
    height: 10%;
  }

  textarea {
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 2rem;
    min-width: 100%;
    max-width: 110%;
    min-height: 30%;
  }
  button {
    border-radius: 50px;
    border: none;
    background: var(--gunmetal);
    color: var(--light-bright-green);
    width: 15%;
    height: 6%;
    cursor: pointer;
    box-shadow: 2px 2px 1px var(--pink);

    &:hover {
      transform: translate3D(3px, 3px, 3px);
      /* transform: translateY(3px); */
    }
  }
`

export default About
