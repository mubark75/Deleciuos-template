import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import "./navbar.scss"

const isActive = ({ isCurrent }) => {
  return {
    className: isCurrent ? "active" : "navlink",
  }
}

const NavLink = props => <Link getProps={isActive} {...props} />

class Navbar extends Component {
  state = {
    showNavList: false,
  }

  render() {
    const {
      props: { siteTitle },
      state: { showNavList },
    } = this
    return (
      <nav>
        <div className="container">
          <div>
            <h1>
              <NavLink to="/">Delecious</NavLink>
            </h1>
            <div>
              <ul>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <button
              className={showNavList ? "active" : ""}
              onClick={() =>
                this.setState({ showNavList: !this.state.showNavList })
              }
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
