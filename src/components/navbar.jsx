import React, { Component } from "react";

//stateless function component

const NavBar = ({totalCounters}) => {
  console.log('NavBar - Rendered');
  
  return (
    
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill bage-secondary">
            {" "}
            {totalCounters}{" "}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
