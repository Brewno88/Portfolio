import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import { respondTo } from "../mixins/respondTo"

const GetInTouch = ({ ...props }) => {
  return (
    <Layout path={props.path}>
      <SEO title="Page two" />
      <MyMain className="getInTouch-main">
        <form
          name="contact"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <h1>Your Email</h1>
          <input type="email" name="email" />
          <h1>Message</h1>
          <textarea type="message" name="message" className="message" />
          <button type="submit">Send</button>
        </form>
      </MyMain>
    </Layout>
  )
}

const MyMain = styled(Main)`

  .form {
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

    h1 {
      color: var(--light-bright-green);
      text-shadow: .1rem .1rem .1rem var(--pink);
      font-size: 2rem;
    }

    input {
      border-radius: 5rem;
      border: none;
      width: 100%;
      height: 2rem;
      padding: 2rem;
      margin-bottom: 3rem;
      font-size: 1.5rem;
    }

    .message {
      border: none;
      border-radius: 2rem;
      padding: 2rem;
      margin-bottom: 3rem;
      font-size: 1.5rem;
      resize: none;
      width: 100%;
      height:30vh;
    }

    button {
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: 50px;
      border: none;
      padding: 1rem .5rem .7rem .5rem;
      background: var(--gunmetal);
      color: var(--light-bright-green);
      width: 7rem;
      cursor: pointer;
      box-shadow: .1rem .1rem .1rem var(--pink);

      &:hover {
        transform: translate3D(0.2rem, 0.2rem, 0.2rem);
        /* transform: translateY(3px); */
      }
    }
  }
`

export default GetInTouch
