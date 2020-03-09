import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = ({ ...props }) => {
  return (
    <MyHeader className="header">
      <Link to="/">
        <MyToggle>
          <div className="navbar-toggle">
            <span className="V">V</span>
            <span className="C">C</span>
          </div>
          <Navbar className="navbar">
            <ol>
              <Link
                to="/about/"
                activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
              >
                <li className="nav-item">About Me</li>
              </Link>
              <Link
                to="/projects/"
                activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
              >
                <li className="nav-item">Projects</li>
              </Link>
              <Link
                to="/skills/"
                activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
              >
                <li className="nav-item">Skills</li>
              </Link>
              <Link
                to="/get-in-touch/"
                activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
              >
                <li className="nav-item">Get In Touch</li>
              </Link>
            </ol>
          </Navbar>
        </MyToggle>
      </Link>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  width: auto;
  display: flex;
  padding: 1rem 1rem 0 1rem;
`

const Navbar = styled.nav`
  background-color: var(--off-white);
  padding: 2rem 3rem 2rem 2rem;
  border-radius: 5rem;
  height: 100%;
  align-items: center;
  display: none;
  transform: translateX(1.5rem);

  @keyframes appear {
    from {
      opacity: 0;
      transform: scaleY(0) translateX(8rem);
    }
    to {
      opacity: 1;
      transform: scaleY(1) translateX(1.5rem);
    }
  }

  ol {
    display: flex;
    margin: 0;

    a:hover {
      text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
      transition: all 0.3s linear;
    }

    a {
      transform: all linear 1s;
      color: var(--gunmetal);
      text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
      font-size: 1.6rem;
    }
  }

  li {
    list-style: none;
    margin: 0 1rem;
    font-family: var(--main-font);
  }
`

const MyToggle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 3%;
  right: 3%;

  &:hover .navbar {
    display: flex;
    animation: appear 0.5s;
  }

  .navbar-toggle {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    border-radius: 7.5rem;
    background-color: var(--off-white);
  }
  .V {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    font-size: 4rem;
    text-align: left;
    color: var(--light-bright-green);
  }
  .C {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
    font-size: 4rem;
    color: var(--pink);
  }
`

export default Header
