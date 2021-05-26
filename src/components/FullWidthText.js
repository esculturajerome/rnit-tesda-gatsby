import React from "react";

const FullWidthText = ({ title, text }) => {
  return (
    <section className="py-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            {title && <h2>{title}</h2>}

            {text && <p className="fs-lg text-muted mb-7 mb-md-9">{text}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthText;
