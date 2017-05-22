import React from "react";

const About = () => (
  <div>
    <br />
    <section className="content-header content-header-1 -blue">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br /><br /><br /><br />
            <h1 className="heading">About Us</h1>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br />
          <h4>Company History</h4>
          {" "}
          <p>
            I Property Claims is a company that concentrates on providing exclusive hazard claims administration services throughout the nation.
          </p>
          <br />
          <h4>Management Team</h4>
          {" "}
          <p>
            IPC’s Management Team has over 30 years of experience that spans concentrations in property management, hazard claims administration, default servicing, and mortgage industry corporate legal services.
          </p>
          <p>
            IPC is equipped to handle your hazard claims administration needs in all 50 states.  No matter what type of insurable damage or where the portfolio footprint resides, IPC can partner with you for success.
          </p>
          <p>IPC is headquartered in Jacksonville, FL.</p>
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default About;
