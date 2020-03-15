import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const Header = ({ ...props }) => {
  const [open, setOpen] = useState(0)
  return (
    <MyHeader className="header">
      <Wrap>
        <HomeLink to="/" open={open}>
          <span role="img" aria-label="house emoji" open={open}>
            🏠
          </span>
        </HomeLink>
        <Toggle onClick={() => setOpen(!open)}>
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
      </Wrap>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  display: flex;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`

const Wrap = styled.div`
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
  display: ${props => (props.open ? "flex" : "none")};
  z-index: 20;
  position: absolute;
  left: 50%;
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

  /* &:hover {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    transition: all 0.3s linear;
  } */
`

const HomeLink = styled(Link)`
  display: ${props => (props.open ? "flex" : "none")};

  align-items: center;
  justify-content: center;
  background: var(--off-white);
  border-radius: 5rem;
  font-size: 2.5rem;
  animation: homeAppear 0.3s;
  width: 5rem;
  height: 5rem;
  z-index: 20;

  @keyframes homeAppear {
    from {
      transform: scaleY(0) translateX(100%);
    }
    to {
      transform: scaleY(1) translateX(0);
    }
  }
`

export default Header
