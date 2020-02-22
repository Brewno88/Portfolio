import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"

const Header = ({ siteTitle }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  console.log(isNavbarOpen)
  return (
    <MyHeader isNavbarOpen={isNavbarOpen}>
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
            <Link to="/about/">
              <li className="nav-item">About Me</li>
            </Link>
            <Link to="/works/">
              <li className="nav-item">Works</li>
            </Link>
            <Link to="/skills/">
              <li className="nav-item">Skills</li>
            </Link>
            <Link to="/get-in-touch/">
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
`

const Navbar = styled.nav`
  background-color: var(--off-white);
  padding: 0 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;

  ol {
    display: flex;
    margin: 0;

    a:hover {
      text-shadow: 2px 2px 1px var(--pink);
    }

    a {
      color: var(--gunmetal);
      text-shadow: 2px 2px 1px var(--light-bright-green);
    }
  }

  li {
    list-style: none;
    margin: 0 10px;
    font-family: var(--main-font);
  }
`

const MyToggle = styled.div`
  display: flex;

  .navbar-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 75px;
    background-color: var(--off-white);
  }
  .V {
    text-shadow: 2px 2px 1px var(--pink);
    font-family: Krungthep;
    font-size: 2.5rem;
    text-align: left;
    color: var(--light-bright-green);
  }
  .C {
    text-shadow: 2px 2px 1px var(--light-bright-green);
    font-family: Krungthep;
    font-size: 2.5rem;
    color: var(--pink);
  }
`

export default Header
