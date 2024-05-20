import React from "react";
import { Link } from "react-router-dom";

/**
 * Creates the navbar that sticks to the top and is present on
 * all pages
 */
export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <style>
        {`
          .nav-wrapper .about-link {
            font-size: 1.5rem;
            padding: 0 10px;
            transition: color 0.3s ease;
          }
          .nav-wrapper .about-link:hover {
            color: purple; 
          }
        `}
      </style>
      <nav className="z-depth-0" style={{ backgroundColor: "#CDA4DE" }}>
        <div className="nav-wrapper">
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
            }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">visibility</i>
            PROCTO
          </Link>
          <ul className="right hide-on-med-and-down" style={{ marginRight: "40px" }}>
            <li>
              <Link to="/about" className="black-text about-link">About</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}
