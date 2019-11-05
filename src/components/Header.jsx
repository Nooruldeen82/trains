import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <div className="nav d-flex justify-content-center mainRed p-1">
        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
          <span className="text-white nav-link">Home</span>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <span className="text-white nav-link" style={{ color: "red" }}>
            About
          </span>
        </Link>
      </div>
    );
  }
}

export default Header;
