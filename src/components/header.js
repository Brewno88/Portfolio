import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const Header = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <MyHeader className="header">
      <MyToggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <div className="navbar-toggle">
          <span className="V">V</span>
          <span className="C">C</span>
        </div>

        {isOpen ? (
          <>
            <Navbar className="navbar">
              <ol>
                <li className="nav-item">
                  <Link
                    to="/about/"
                    activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/projects/"
                    activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/skills/"
                    activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/get-in-touch/"
                    activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
                  >
                    Get In Touch
                  </Link>
                </li>
              </ol>
            </Navbar>
            <Link to="/">
              <Home>🏠</Home>
            </Link>
          </>
        ) : (
          <div></div>
        )}
      </MyToggle>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  width: auto;
  display: flex;
  padding: 1rem 1rem 0 1rem;
`

const Home = styled.div`
  position: absolute;
  background: white;
  border-radius: 5rem;
  width: 4rem;
  height: 4rem;
  right: 100%;
  bottom: 15%;
  display: ${props => (props.isOpen ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  animation: homeAppear 0.5s;

  @keyframes homeAppear {
    from {
      transform: scaleY(0);
      right: 50%;
    }
    to {
      transform: scaleY(1);
      right: 100%;
    }
  }
`

const Navbar = styled.nav`
  height: 100%;
  align-items: center;
  display: ${props => (props.isOpen ? "none" : "flex")};
  z-index: 10;

  ol {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
    position: absolute;
    right: 0;
    width: 15rem;
    bottom: 100%;
    animation: navAppear 0.3s;

    @keyframes navAppear {
      from {
        bottom: -50%;

        transform: scaleY(0);
      }
      to {
        bottom: 100%;

        transform: scaleY(1);
      }
    }

    a:hover {
      text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
      transition: all 0.3s linear;
    }

    a {
      transform: all linear 1s;
      color: var(--gunmetal);
      text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
      font-size: 1.6rem;
      margin: 1rem;
    }
  }

  li {
    list-style: none;
    margin: 0 1rem;
    font-family: var(--main-font);
    background-color: var(--off-white);
    padding: 0.5rem 0.5rem;
    border-radius: 5rem;
  }
`

const MyToggle = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 3%;
  right: 3%;

  .navbar-toggle {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 7.5rem;
    background-color: var(--off-white);
  }
  .V {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    font-size: 3rem;
    text-align: left;
    color: var(--light-bright-green);
  }
  .C {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
    font-size: 3rem;
    color: var(--pink);
  }
`

export default Header
