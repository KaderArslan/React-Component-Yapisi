import React from "react";
function FirstPart() {
  return (
    <section id="firstPart">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <p className="title">
              <span className="fs-1 fst-normal">
                <strong>
                  Your signature <br />
                  engraved credit card
                </strong>
              </span>
              <br />
              <span className="title-small fst-normal">with zero charges</span>
            </p>
            <p className="mt-5">
              <span className="fs-5 lh-sm text-muted fst-normal fw-normal">
                We are young and fierceful team creating <br />
                modern, personalised credit cards with lots of <br />
                offers and cashbacks.
              </span>
            </p>
            <p className="mt-5">
              <button
                id="applyNowButton"
                type="button"
                className="me-5 btn rounded-3 text-light btn-light"
                type="submit"
              >
                <span className="fst-normal fw-normal">Apply Now</span>
              </button>
              <ins className="text-muted">Watch videos for perks</ins>
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <img
              src="https://focused-jones-e5141a.netlify.app/images/card.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstPart;
