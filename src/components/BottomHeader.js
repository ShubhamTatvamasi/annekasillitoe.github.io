import React from "react";

class BottomNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar justify-content-around fixed-bottom navbar-primary bg-white d-sm-none">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link px-3" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="/skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="/conferences">
              Conferences
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BottomNavbar;
