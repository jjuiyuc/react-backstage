import React from "react";
import { useHistory } from "react-router-dom";
import { MainContainer } from "@component";
import { CButton } from "@coreui/react";

const MedicinePage = () => {
  const history = useHistory();

  return (
    <>
      <MainContainer>
        <div className="announcement-container">
          <div className="page-head flex">
            <div className="page-title font-primary">藥品衛教</div>

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
      </MainContainer>
    </>
  );
};
export default MedicinePage;
