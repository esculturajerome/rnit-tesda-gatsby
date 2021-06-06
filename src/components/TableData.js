import React from "react";
import { MDBDataTable } from "mdbreact";

export default ({ data }) => {
  return (
    <>
      <MDBDataTable striped bordered hover data={data} />
    </>
  );
};
