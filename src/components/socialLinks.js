import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { respondTo } from "../mixins/respondTo"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { fontawesome } from "@fortawesome/fontawesome"

fontawesome.config = { autoAddCss: false }
const SocialLinks = () => {
  return (
    <MySocialLinks>
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
    </MySocialLinks>
  )
}

//* styled-component < 💅>
const MySocialLinks = styled.div`
  color: var(--off-white);
  display: flex;
  align-items: center;
  margin-right: 2%;
  font-size: 3rem;

  .socialIcons{
    width: 100%;
  }

  .icon{
    margin-left: 1rem;
    color: var(--light-bright-green);
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
