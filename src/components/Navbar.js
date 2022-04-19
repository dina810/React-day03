//import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import LangugaeContext from './../context/language';
import React from "react";
export default function Navbar() {
  //const { lang } = useContext(LangugaeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Product
            </Link>
            {/* <Link className="nav-link active" aria-current="page" to="/product-details">
            ProductDetails
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
