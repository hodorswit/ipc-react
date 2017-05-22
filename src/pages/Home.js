import React from "react";

import home from "../assets/img/ipchome.jpg";

const Home = () => (
  <div>
    <section className="masthead masthead-8">
      <div className="container">
        <div className="row">
          <div className="call-to-action col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-1 col-lg-offset-1">
            <h2 className="heading top">
              <small>
                <p>
                  I Property Claims is a company that concentrates on providing exclusive hazard claims administration services throughout the nation.
                </p>
                <p>
                  From the initial damage evaluation all the way through to insurance claim settlement, I Property Claims’ (IPC), prime objectives are to mitigate risk, minimize monetary expenditure while maximizing settlements in order to further asset management opportunity.
                </p>
                <p>
                  In order to provide a stellar suite of services, IPC places an emphasis on quality and technology in an effort to provide customizable solutions that can fit any business model.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </small>
            </h2>
          </div> {/* .col-lg-6 */}
          <div className="device col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <img src={home} className="img-responsive" alt />
          </div> {/* .device */}
        </div> {/* .row */}
      </div> {/* .container */}
    </section>
    <section className="cta cta-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <h2 className="heading">
              IPC: Your Priority is Our Priority.
              <br />
              {" "}
              <small>
                To learn more about partnering with IPC please complete the following form
                <br />
                and an Account Executive will be in touch to answer any/all questions.
              </small>
            </h2>
            <a routerlink="/contact">
              &gt;<button className="btn primary-btn -gray">Contact IPC</button>
            </a>
          </div>{/* .col-lg-10 */}
        </div> {/* .row */}
      </div> {/* .container */}
    </section>
  </div>
);

export default Home;
