import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//component
import {
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CButton,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";

import { toastError, toastDark } from "@util";
import { MainContainer, DataTable } from "@component";

const AnnouncementAddPage = () => {
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
            <div className="page-title font-primary">要發布的消息</div>
          </div>
          <CRow>
            <CCol sm="12">
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Email</CLabel>
                  <CInput
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="Enter Email.."
                    autoComplete="email"
                  />
                  <CFormText className="help-block">
                    Please enter your email
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Password</CLabel>
                  <CInput
                    type="password"
                    id="nf-password"
                    name="nf-password"
                    placeholder="Enter Password.."
                    autoComplete="current-password"
                  />
                  <CFormText className="help-block">
                    Please enter your password
                  </CFormText>
                </CFormGroup>
              </CForm>
              <div className="btn-wrapper">
                <CButton
                  variant="outline"
                  className="m-2 add-btn"
                  size="lg"
                  color="warning"
                  onClick={add}
                >
                  <span className="font-en">儲存並繼續</span>
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
      </MainContainer>
    </>
  );
};
export default AnnouncementAddPage;
