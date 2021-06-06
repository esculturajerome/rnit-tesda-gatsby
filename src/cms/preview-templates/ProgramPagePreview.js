import React from "react";
import PropTypes from "prop-types";
import { ProgramPageTemplate } from "../../templates/program-page";

const ProgramPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <ProgramPageTemplate
      image={data.image}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
    />
  );
};

ProgramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProgramPagePreview;
