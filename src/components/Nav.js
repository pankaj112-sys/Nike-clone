import React from "react";
import jordan from "../images/jordan.svg"
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img 
            src={jordan} 
            width="18" 
            height="18" 
            className="d-inline-block align-top mx-5" 
          />
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mx-5">
            <li className="nav text-500">
              <a className="nav-link mx-2 text-black fw-semibold" href="/">Find a store</a> 
            </li> |
            <li className="nav-item">
              <a className="nav-link mx-2 text-black fw-semibold" href="/help">Help</a>
            </li> |
            <li className="nav-item">
              <a className="nav-link mx-2 text-black fw-semibold" href="/joinus">Join Us</a>
            </li> |
            <li className="nav-item">
              <a className="nav-link mx-2 text-black fw-semibold" href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
