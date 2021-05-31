import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const preview = true;
  const data = entry.getIn(["data"]).toJS();
  console.log(data, "entryxxxyyy");
  return (
    <AboutPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      desc={entry.getIn(["data", "description"])}
      mission={data.main.mission}
      vision={data.main.vision}
      main={data.main.blurbs || { blurbs: [] }}
      preview={preview}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
