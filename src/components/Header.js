import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm fixed-top justify-content-around navbar-primary bg-white d-none d-sm-flex">
        <ul className="navbar-nav">
          <li className="nav-item px-5">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/"}>
              About
            </a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/skills"} >
              Skills
            </a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/conferences"} >
              Conferences
            </a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/contact"} >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
