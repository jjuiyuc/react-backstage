import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//component
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CRow,
  CButton,
} from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";

import { useInput, toastError, toastDark } from "@util";
import { MainContainer, DataTable } from "@component";

const AnnouncementPage = () => {
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
            <div className="page-title font-primary">最新消息</div>
            {/* <CIcon
                            className="plus-icon"
                            content={freeSet.cilPlus}
                        /> */}
            <div className="btn-wrapper">
              <CButton
                variant="outline"
                className="m-2 add-btn"
                size="lg"
                color="warning"
                onClick={add}
              >
                <span className="font-en">新增</span>
              </CButton>
            </div>
          </div>
          <div className="page-tabs">
            <CTabs activeTab="all">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="all">全部</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="now">進行中的活動</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="next">接下來的活動</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="end">已結束</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="all">
                  <DataTable />
                </CTabPane>
                <CTabPane data-tab="now">456</CTabPane>
                <CTabPane data-tab="next">789</CTabPane>
                <CTabPane data-tab="end">789</CTabPane>
              </CTabContent>
            </CTabs>
          </div>
        </div>
      </MainContainer>
    </>
  );
};
export default AnnouncementPage;
