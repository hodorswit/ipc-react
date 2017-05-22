import React from "react";
import logo from "../assets/img/IPCGrey.png";

const NavBar = () => (
  <nav className="navbar navbar-fixed-top primary-navbar">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="home" className="navbar-brand">
          <img src={logo} className="img-responsive" />
        </a>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <ul className="nav navbar-nav right">
          <li>
            <a
              href="https://client.ipropertyclaims.com"
              target="_blank"
              className="navbar-nav pull-right"
            >
              Client Login
            </a>
          </li>
        </ul>
      </div>{/* .navbar-collapse */}
    </div>{/* .container-fluid */}
  </nav>
);

export default NavBar;
