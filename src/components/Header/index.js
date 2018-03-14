import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
    <a className="navbar-brand" href="#">CarbonQL</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/docs/">Docs</Link>
        <Link className="nav-item nav-link" to="/cookbook">Cookbook</Link>
      </div>
    </div>
  </nav>
)

export default Header
