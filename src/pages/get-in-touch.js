import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import { respondTo } from "../mixins/respondTo"

const GetInTouch = ({ ...props }) => {
  return (
    <Wrap>
      <Layout path={props.path}>
        <SEO title="Page two" />
        <Main className="getInTouch-main">
          <form name="contact" action="POST" data-netlify="true">
            <div className="email">
              Your Email
              <input type="email" name="email" />
            </div>

            <div className="message">
              You Message
              <textarea name="message" />
            </div>
            <button type="submit">Send</button>
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

  div {
    color: var(--light-bright-green);
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    font-size: 2rem;

    input {
      border-radius: 5rem;
      border: none;
      width: 100%;
      height: 2rem;
      padding: 2rem;
      margin: 3rem 0;
      font-size: 1.5rem;
    }

  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    ${respondTo.mobileS`
      width: 100%
      `}
    ${respondTo.tablet`
      width: 80%;
    `}
    ${respondTo.laptop`
      width: 40%;
    `}
    ${respondTo.laptopL`
      width: 40%;
    `}
  }

  .message {
    display: flex;
    flex-direction: column;
      height: 50%;
    textarea {
      border: none;
      border-radius: 2rem;
      padding: 2rem;
      margin: 3rem 0;
      font-size: 1.5rem;
      resize: none;
      width: 100%;
      height: 100%;
    }
  }
    button {
      font-size: 1.5rem;
      border-radius: 50px;
      border: none;
      padding: .5rem;
      background: var(--gunmetal);
      color: var(--light-bright-green);
      width: 7rem;
      cursor: pointer;
      box-shadow: 0.2rem 0.2rem 0.1rem var(--pink);

      &:hover {
        transform: translate3D(0.2rem, 0.2rem, 0.2rem);
        /* transform: translateY(3px); */
      }
    }
`

export default GetInTouch
