import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import FullWidthText from "../../components/FullWidthText";
import TextImage from "../../components/TextImage";
import { Container, Row } from "react-bootstrap";

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
              title="Our Campus is located at"
              text="Poblacion, Alcantara, Romblon"
              image={building}
            />
          </Row>
          <Row className="py-md-11">
            <FullWidthText
              title="Let us hear from you directly!"
              text="We always want to hear from you! Let us know how we can best help you and we'll do our very best. "
            />

            <div className="row mb-5">
              <div className="col-12 col-md-4 text-center border-end border-gray-300">
                <h6 className="text-uppercase text-gray-700 mb-1">
                  Message the Admin
                </h6>
                <div className="mb-5 mb-md-0">
                  <a
                    href="tel:09985731845"
                    target="_blank"
                    rel="noreferrer"
                    className="h4 text-primary"
                  >
                    09985731845
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center border-end border-gray-300">
                <h6 className="text-uppercase text-gray-700 mb-1">
                  Message the Registrar
                </h6>
                <div className="mb-5 mb-md-0">
                  <a
                    href="tel:09487705807"
                    target="_blank"
                    rel="noreferrer"
                    className="h4"
                  >
                    09487705807
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center">
                <h6 className="text-uppercase text-gray-700 mb-1">Email us</h6>

                <a
                  href="mailto:ant@tesda.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="h4"
                >
                  ant@tesda.gov.ph
                </a>
              </div>
            </div>

            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor={"name"}>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"message"}>
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </Row>
        </Container>
      </Layout>
    );
  }
}
