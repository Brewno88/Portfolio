import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { respondTo } from "../mixins/_respondTo"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const SocialLinks = () => {
  return (
    <_SocialLinks>
      <div className="socialIcons">
        <a href="https://github.com/Brewno88" target="blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://twitter.com/VinnieCon73" target="blank">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vincenzo-conte-442b94128/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </_SocialLinks>
  )
}

//* styled-component < 💅>
const _SocialLinks = styled.div`
  color: var(--off-white);
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-size: 3rem;

  .icon{
    margin-left: 1rem;
    color: var(--light-bright-green)
  }

    ${respondTo.mobileS`
  font-size: 4rem;
  `}
  ${respondTo.mobileM`
  font-size: 4rem;
  `}
  ${respondTo.mobileL`
  font-size: 5em;
  `}
  ${respondTo.tablet`
  font-size: 6em;
  `}
`

export default SocialLinks
