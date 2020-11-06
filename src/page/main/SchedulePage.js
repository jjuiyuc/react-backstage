import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//component
import { MainContainer, RecurrenceEvents } from "@component";
import { CButton } from "@coreui/react";

// import { toastError, toastDark } from "@util";

const SchedulePage = () => {
  const history = useHistory();

  return (
    <>
      <MainContainer>
        <div className="announcement-container">
          <div className="page-head flex">
            <div className="page-title font-primary">活動資訊</div>

            {/* <div className="btn-wrapper">
                            <CButton
                                variant="outline"
                                className="m-2 add-btn btn-green"
                                size="lg"
                                color="success"
                                onClick={add}
                            >
                                <span className="font-en">新 增</span>
                            </CButton>
                        </div> */}
          </div>
        </div>
        <div>{/* <RecurrenceEvents /> */}</div>
      </MainContainer>
    </>
  );
};
export default SchedulePage;
