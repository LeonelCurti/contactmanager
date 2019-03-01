import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand">
        {props.branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              Add Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  branding: "My App"
};
Header.prototype = {
  branding: PropTypes.string.isRequired
};
export default Header;