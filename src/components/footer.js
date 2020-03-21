import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const Footer = ({ ...props }) => {
  const [open, setOpen] = useState(0)
  return (
    <MyFooter className="footer">
      <NavbarWrap>
        <Toggle onClick={() => setOpen(!open)} open={open}>
          <span className="V">V</span>
          <span className="C">C</span>
        </Toggle>

        <Navbar className="navbar" open={open}>
          <ol>
            <li className="nav-item">
              <ListLink
                to="/about/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <span role="img" aria-label="house emoji">
                  🙍‍♂️
                </span>
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/projects/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <span role="img" aria-label="house emoji">
                  📙
                </span>
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/skills/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <span role="img" aria-label="house emoji">
                  💻
                </span>
              </ListLink>
            </li>
            <li className="nav-item">
              <ListLink
                to="/get-in-touch/"
                activeStyle={{ backgroundColor: "var(--pink)" }}
              >
                <span role="img" aria-label="house emoji">
                  📮
                </span>
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
  position: absolute;
  bottom: 2rem;
  right: 2rem;
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
  width: 7rem;
  height: 7rem;
  border-radius: 7.5rem;
  background-color: var(--off-white);

  /* animation: ${props => (props.open ? "none" : "shake 5s infinite")}; */
  /*
  @keyframes shake {
    2%,
    18% {
      transform: translate(-2px);
    }

    4%,
    16% {
      transform: translate(4px);
    }

    6%,
    10%,
    14% {
      transform: translate(-2px);
    }

    8%,
    12% {
      transform: translate(4px);
    }

    18.1% {
      transform: translate(0px);
    }
  } */

  &:hover {
    cursor: pointer;
  }

  .V {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    font-size: 3.5rem;
    text-align: left;
    color: var(--light-bright-green);
  }
  .C {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
    font-size: 3.5rem;
    color: var(--pink);
  }
`

const Navbar = styled.nav`
  display: ${props => (props.open ? "block" : "none")};
  z-index: 20;
  position: absolute;
  left: 16%;
  bottom: 100%;

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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  margin: 0;
  width: 5rem;
  height: 5rem;
  animation: navAppear 0.3s;
  font-size: 2.5rem;
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
