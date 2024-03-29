import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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

import axios from "axios";
import { toastError, toastDark } from "@util";
import { MainContainer, DataTable } from "@component";

const AnnouncementPage = () => {
  const history = useHistory();
  const [announcementData, setAnnouncementData] = useState([]);

  const add = () => history.push("/announcement/add");

  // const getAnnouncement = () => {
  //     (async () => {
  //         const res = await axios({
  //             url: `http://54.238.13.73:5000/api/0.3.0/announcement/`,
  //             method: "GET",
  //         });
  //         const data = await res.json();

  //         return data;
  //     })();
  // };

  return (
    <>
      <MainContainer>
        <div className="announcement-container">
          <div className="page-head flex">
            <div className="page-title font-primary">最新消息</div>

            <div className="btn-wrapper">
              <CButton
                variant="outline"
                className="m-2 add-btn btn-gold"
                size="lg"
                color="warning"
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
export default AnnouncementPage;
