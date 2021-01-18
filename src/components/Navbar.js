import React from "react";
function Navbar() {
  return (
    <section id="navbarId">
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container fst-normal fw-normal">
          <a className="navbar-brand" href="index.html">
            <img
              src="https://focused-jones-e5141a.netlify.app/images/logo.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active pe-5"
                  aria-current="page"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active pe-5" href="#">
                  Your Cart
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active pe-5"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active pe-5" href="#">
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active pe-5" href="#">
                  Log in
                </a>
              </li>
            </ul>
            <ul className="navbar-nav text-light">
              <li className="d-grid gap-5 mx-auto ">
                <button type="button" className="btn rounded-3">
                  <a
                    className="text-decoration-none text-white"
                    href="#"
                    aria-current="page"
                    value="Sing Up"
                  >
                    Sing up
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
