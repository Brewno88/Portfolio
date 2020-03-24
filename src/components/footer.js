import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faUser,
  faDesktop,
  faToolbox,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

const Footer = ({ ...props }) => {
  const [open, setOpen] = useState(0)
  return (
    <MyFooter className="footer">
      <NavbarWrap>
        <Toggle onClick={() => setOpen(!open)} open={open}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </Toggle>

        <Navbar className="navbar" open={open}>
          <ol>
            <li className="nav-item">
              <ListLink
                to="/about/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/projects/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <FontAwesomeIcon icon={faDesktop} />
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/skills/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <FontAwesomeIcon icon={faToolbox} />
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/get-in-touch/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </ListLink>
            </li>
          </ol>
        </Navbar>
      </NavbarWrap>
    </MyFooter>
  )
}

const MyFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
`

const NavbarWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Toggle = styled.div`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 7.5rem;
  background-color: var(--off-white);
  box-shadow: 0.2rem 0.2rem .2rem var(--light-bright-green);

  &:active {
    transform: translate3d(0.1rem, 0.1rem, 0.1rem);
    box-shadow: none;
  }
/*
  animation: ${props => (props.open ? "none" : "enter .5s ease-out")};
  @keyframes enter {
    from {
      transform: translate(20px);
    }

    to {
      transform: translate(0px);
    }
  } */

  &:hover {
    cursor: pointer;
  }

  .icon {
    font-size: 3rem;
  }
`

const Navbar = styled.nav`
  z-index: 20;
  position: absolute;
  left: 10%;
  bottom: 100%;
  display: ${props => (props.open ? "block" : "none")};
  ol {
    display: flex;
    flex-direction: column;
    margin: 0;
    animation: navAppear 0.3s;

    li {
      margin: 0;
      list-style: none;
    }
  }
`

const ListLink = styled(Link)`
  background-color: var(--off-white);
  color: var(--gunmetal);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  margin: 0;
  width: 5rem;
  height: 5rem;
  animation: navAppear 0.3s;
  font-size: 2rem;
  z-index: 20;

  @keyframes navAppear {
    from {
      transform: scaleY(0) translateY(100%);
    }
    to {
      transform: scaleY(1) translateY(0);
    }
  }
`

export default Footer
