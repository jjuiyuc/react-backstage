import React from "react";
import { CRow, CButton } from "@coreui/react";

const BtnPageHead = (props) => {
  return (
    <>
      <CRow className="d-flex justify-content-between">
        <CButton variant="outline" size="lg" className="m-2" color="info">
          {" "}
          {props.children}
        </CButton>
      </CRow>
    </>
  );
};

export default BtnPageHead;
