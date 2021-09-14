import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import FullWidthText from "../../components/FullWidthText";
import TextImage from "../../components/TextImage";
import { Container, Row, Col } from "react-bootstrap";

import building from "../../img/building.png";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <TextImage
              title="Poblacion, Alcantara, Romblon"
              text="Our campus address"
              image={building}
            />
          </Row>
        </Container>
        <div className="bg-gradient-light-white ">
          <Container>
            <Row className="py-md-11">
              <FullWidthText
                title="Let us hear from you directly!"
                text="We always want to hear from you! Let us know how we can best help you and we'll do our very best. "
              />

              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="mb-5 mt-5"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <Row className="justify-content-md-center">
                  <Col md={3}>
                    <div className="field">
                      <label className="label form-label" htmlFor={"name"}>
                        Full name
                      </label>
                      <div className="control">
                        <input
                          className="form-control"
                          type={"text"}
                          name={"name"}
                          onChange={this.handleChange}
                          placeholder="Full Name"
                          id={"name"}
                          required={true}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="field">
                      <label className="label form-label" htmlFor={"email"}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="form-control"
                          placeholder="hello@gmail.com"
                          type={"email"}
                          name={"email"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                  <Col md={6}>
                    <div className="field">
                      <label className="label form-label" htmlFor={"message"}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="form-control"
                          name={"message"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
                          placeholder="Your Message."
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                  <Col md={3}>
                    <button
                      className="btn w-100 btn-primary d-flex align-items-center "
                      type="submit"
                    >
                      <span className="mx-auto">Submit</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Row>
          </Container>
          <div className="bg-blue">
            <div className="row py-md-11 contact">
              <div className="col-12 col-md-4 text-center border-end border-gray-300">
                <h6 className="text-uppercase">Message the Admin</h6>
                <div className="mb-5 mb-md-0">
                  <a href="tel:09985731845" target="_blank" rel="noreferrer">
                    09985731845
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center border-end border-gray-300">
                <h6 className="text-uppercase">Message the Registrar</h6>
                <div className="mb-5 mb-md-0">
                  <a href="tel:09487705807" target="_blank" rel="noreferrer">
                    09487705807
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center">
                <h6 className="text-uppercase">Email us</h6>

                <a
                  href="mailto:ant@tesda.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  ant@tesda.gov.ph
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
