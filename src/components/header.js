import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"

const Header = ({ ...props }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true)

  return (
    <MyHeader className="header" isNavbarOpen={isNavbarOpen}>
      <Link to="/">
        <MyToggle
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          isNavbarOpen={isNavbarOpen}
        >
          <div className="navbar-toggle">
            <span className="V">V</span>
            <span className="C">C</span>
          </div>
        </MyToggle>
      </Link>
      {isNavbarOpen ? (
        <Navbar>
          <ol>
            <Link
              to="/about/"
              activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
            >
              <li className="nav-item">About Me</li>
            </Link>
            <Link
              to="/works/"
              activeStyle={{ textShadow: "2px 2px 1px var(--pink)" }}
            >
              <li className="nav-item">Works</li>
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
      ) : (
        <div></div>
      )}
    </MyHeader>
  )
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

const MyHeader = styled.header`
  width: auto;
  display: flex;
  justify-content: ${props => (props.isNavbarOpen ? "space-between" : "end")};
  padding: 1rem 1rem 0 1rem;
`

const Navbar = styled.nav`
  background-color: var(--off-white);
  padding: 0 2rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;

  ol {
    display: flex;
    margin: 0;

    a:hover {
      text-shadow: 0.2rem 0.2rem 0.1rem var(--pink);
    }

    a {
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

  .navbar-toggle {
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
    font-family: Krungthep;
    font-size: 4rem;
    text-align: left;
    color: var(--light-bright-green);
  }
  .C {
    text-shadow: 0.2rem 0.2rem 0.1rem var(--light-bright-green);
    font-family: Krungthep;
    font-size: 4rem;
    color: var(--pink);
  }
`

export default Header
