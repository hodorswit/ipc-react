import React from "react";

const Contact = () => (
  <div>
    <br />
    <section className="content-header content-header-1 -blue">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br /><br /><br /><br />
            <h1 className="heading">Contact Us</h1>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br />
          <p>For general inquiries please call us toll-free at: 844-286-5626</p>
          <p>
            To learn more about partnering with IPC please complete the following form and an Account Executive will be in touch to answer any/all questions:
          </p>
        </div>
      </div>
    </div>
    <section className="form form-1">
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <form role="form" className="contact-form" id="contactForm">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-lg"
                      name="name"
                      autoComplete="on"
                      required="required"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-lg"
                      name="companyName"
                      autoComplete="on"
                      required="required"
                      id="companyName"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control input-lg"
                      name="emailAddress"
                      autoComplete="on"
                      required="required"
                      id="emailAddress"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-lg"
                      name="phoneNumber"
                      autoComplete="on"
                      required="required"
                      id="subject"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control input-lg textarea"
                      rows={8}
                      required="required"
                      name="message"
                      id="message"
                      placeholder="Message"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <a href="mailto:claims@ipropertyclaims.com?subject=ipropertyclaims.com Contact Us&body=The following company has requested information regarding I Property Claims:%0D%0D%0DName: {{ name }}%0D%0DCompany Name: {{ companyName }}%0D%0DEmail Address: {{ emailAddress }}%0D%0DPhone Number: {{ phoneNumber}}%0D%0DMessage: {{ message }}">
                    <button type="button" className="btn primary-btn -gray">
                      Send
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xs-4 map">
            <style
              dangerouslySetInnerHTML={{
                __html: ".embed-container {\n          position: relative;\n          padding-bottom: 84%;\n          height: 0;\n          overflow: hidden;\n          max-width: 100%;\n        }\n\n        .embed-container iframe, .embed-container object, .embed-container embed {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n        }"
              }}
            />
            <div className="embed-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.239802630218!2d-81.5812383489563!3d30.23023738172584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5ca4102078af5%3A0x99a64d1f766f6e31!2s8665+Baypine+Rd+%23200%2C+Jacksonville%2C+FL+32256!5e0!3m2!1sen!2sus!4v1486059929870"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
