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

import { toastError, toastDark } from "@util";
import { MainContainer, DataTable } from "@component";

const EventPage = () => {
  const history = useHistory();

  const add = () => history.push("/event/add");
  return (
    <>
      <MainContainer>
        <div className="announcement-container">
          <div className="page-head flex">
            <div className="page-title font-primary">活動資訊</div>

            <div className="btn-wrapper">
              <CButton
                variant="outline"
                className="m-2 add-btn btn-green"
                size="lg"
                color="success"
                onClick={() => add()}
              >
                <span className="font-en">新 增</span>
              </CButton>
            </div>
          </div>
          <div className="page-tabs">
            <CTabs activeTab="all">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="all">全部</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="all">
                  <DataTable />
                </CTabPane>
              </CTabContent>
            </CTabs>
          </div>
        </div>
      </MainContainer>
    </>
  );
};
export default EventPage;
