import React from "react";
function ThirtyPart() {
  return (
    <section id="thirdPart">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-5 mt-5">
            <img
              className="img-fluid"
              src="https://focused-jones-e5141a.netlify.app/images/handCardSing.png"
              alt="handCardSing"
            />
          </div>
          <div className="col-md-1 mt-5" />
          <div className="col-md-6 mt-5">
            <span className="fs-1 text-title fst-normal fw-bold">
              <strong>Best in town</strong>
            </span>
            <p className="mt-5 fst-normal fw-normal">
              Showcasing your products to your <br />
              customers is essential to any business. <br />
              The more you delay, the more you lose <br />
              out. But, the trick is to keep the <br />
              customers both happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirtyPart;
