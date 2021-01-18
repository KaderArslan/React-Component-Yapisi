import React from "react";
function SecondPart() {
  return (
    <section id="secondPart">
      <div className="container">
        <div className="row mt-5">
          <span className="fs-1 fst-normal text-center mt-5">
            <strong>Our unique benefits</strong>
          </span>
          <div className="col-md-4 text-center mt-5">
            <img
              className="mt-5 img-fluid"
              src="https://focused-jones-e5141a.netlify.app/images/securedPayment.png"
              alt="securedPayment"
            />
            <h5 className="text-center mt-5 fst-normal">
              <strong>Secured payment</strong>
            </h5>
            <p className="text-center mt-3 text-muted fst-normal fw-normal">
              Take payment upfront and it will be under escrow and paid to you
              at the end of the successfull contract
            </p>
          </div>
          <div className="col-md-4 text-center mt-5">
            <img
              className="mt-5"
              src="https://focused-jones-e5141a.netlify.app/images/milestoneJobs.png"
              alt="milestoneJobs"
            />
            <h5 className="text-center mt-5 fst-normal">
              <strong>Milestone jobs</strong>
            </h5>
            <p className="text-center mt-3 text-muted fst-normal fw-normal">
              You can pay partly according to work done by the lancer. All the
              terms can be defined before the contract starts.
            </p>
          </div>
          <div className="col-md-4 text-center mt-5">
            <img
              className="mt-5"
              src="https://focused-jones-e5141a.netlify.app/images/discountEverytime.png"
              alt="discountEverytime"
            />
            <h5 className="text-center mt-5 fst-normal">
              <strong>5% discount everytime</strong>
            </h5>
            <p className="text-center mt-3 text-muted fst-normal fw-normal">
              You can give feedback to your lancer directly and it will help the
              community to have the best with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondPart;
