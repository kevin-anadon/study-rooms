import React from "react";
import "./Navbar.css";
export default function navbar() {
  return (
    <div>
      {" "}
      <nav className="navbar p-0">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              width="70"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
