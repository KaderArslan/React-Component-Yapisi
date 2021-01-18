import React from "react";
function Footer() {
  return (
    <section id="footer">
      <div className="container-fluid border-0 mt-5">
        <div className="row">
          <div className="col-md-3 pt-5 mt-3 pb-4">
            <img
              className=" ms-5"
              src="https://focused-jones-e5141a.netlify.app/images/logo.png"
              alt="logo"
            />
            <br />
            <p className="text-muted ms-5">
              <img
                className="me-1 mb-2"
                src="https://focused-jones-e5141a.netlify.app/images/location.png"
                alt="location"
              />
              <span>207, Pittsburgh,</span>
              <br />
              <span className="ms-4">California.</span>
            </p>
            <div className="links">
              <ul className="d-flex">
                <ul>
                  <a>
                    <img
                      src="https://focused-jones-e5141a.netlify.app/images/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                </ul>
                <ul>
                  <a>
                    <img
                      src="https://focused-jones-e5141a.netlify.app/images/linkedln.png"
                      alt="Linkedln"
                    />
                  </a>
                </ul>
                <ul>
                  <a>
                    <img
                      src="https://focused-jones-e5141a.netlify.app/images/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                </ul>
              </ul>
            </div>
            <br />
            <br />
            <p className="text-muted">
              All rights reserved by PeppitDesign&copy;2020
            </p>
          </div>
          <div className="col-md-3 pt-5 mt-3">
            <h4 className="text-white fst-normal fw-bold">Company</h4>
            <ul className="list-unstyled text-small mt-4 fst-normal fw-normal">
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Career
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  About Us
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Terms
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 pt-5 mt-3">
            <h4 className="text-white fst-normal fw-bold">Explore</h4>
            <ul className="list-unstyled text-small mt-4 fst-normal fw-normal">
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  News
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Blog
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 pt-5 mt-3 ">
            <h4 className="text-white fst-normal fw-bold">Services</h4>
            <ul className="list-unstyled text-small mt-4 fst-normal fw-normal">
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Emi Perks
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Platinum Card
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Hero Card
                </a>
              </li>
              <li className="pb-2">
                <a className="link text-decoration-none text-muted" href="#">
                  Cash Free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
