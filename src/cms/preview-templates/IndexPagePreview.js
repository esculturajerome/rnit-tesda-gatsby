import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const preview = true;

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        subheading={data.subheading}
        main={data.main}
        mainImage={data.main.image}
        intro={data.intro || { blurbs: [] }}
        preview={preview}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
