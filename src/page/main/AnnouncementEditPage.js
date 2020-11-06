import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//component
import { CRow, CButton } from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";
import {
  MainContainer,
  DataTableDetails,
  DataTableDetailsEdit,
} from "@component";
import { useInput, toastError, toastDark } from "@util";

const AnnouncementEditPage = () => {
  const history = useHistory();

  const [hint, setHint] = useState("");
  const [isadded, setIsAdded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const add = () => {
    if (isClicked) return; // prevent multiple clicks
    setIsAdded(true);
    if (!isClicked) toastDark();
    setHint("");
    setIsClicked(true);

    const onSuccess = () => {
      history.push("/verify");
    };
    const onError = (err) => {
      toastError(err);
      setIsClicked(false);
    };
  };

  return (
    <>
      <MainContainer>
        <div className="announcement-container">
          <div className="page-head flex">
            <div className="page-title font-primary">要發布的最新消息</div>
            {/* <CIcon
                            className="plus-icon"
                            content={freeSet.cilPlus}
                        /> */}
            <div className="btn-wrapper">
              <CButton
                // variant="outline"
                className="m-2 end-btn "
                shape="square"
                size=""
                onClick={add}
              >
                <span className="font-en">結束活動</span>
              </CButton>
            </div>
          </div>

          <div className="page-tabs">
            {/* <DataTableDetails /> */}
            <DataTableDetailsEdit />
          </div>
        </div>
      </MainContainer>
    </>
  );
};
export default AnnouncementEditPage;
