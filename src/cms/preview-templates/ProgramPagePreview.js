import React from "react";
import PropTypes from "prop-types";
import { ProgramPageTemplate } from "../../templates/program-page";

const ProgramPagePreview = ({ entry, getAsset }) => {
  const preview = true;

  return (
    <ProgramPageTemplate
      title={entry.getIn(["data", "title"])}
      preview={preview}
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
