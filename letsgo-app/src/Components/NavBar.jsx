import React, { Component } from "react";

//Stateless Functional Component

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="letsgo-app/public/signIn.html">
        Uber{" "}
      </a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <button
            className="btn btn-outline-secondary btn-med"
            onClick="window.location.href=public/signIn.html"
          >
            LogIn
          </button>
        </li>
        <li class="nav-item">
          <button
            className="btn btn-outline-secondary btn-med"
            href="public/signUp.html"
          >
            Signup
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
