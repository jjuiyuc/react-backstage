import React, { useState } from "react";
import {
  CDataTable,
  CBadge,
  CButton,
  CLabel,
  CInput,
  CCollapse,
  CCardBody,
  CSwitch,
} from "@coreui/react";

const DataTableDetailsEdit = (props) => {
  // const [editOpen, setEditOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const usersData = [
    {
      lang: "TW",
      title: "",
      content: "",
      startDate: "",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      lang: "CN",
      title: "",
      content: "",
      startDate: "",
      endDate: "",
      status: "進行中的活動",
    },
    {
      lang: "EN",
      title: "",
      content: "",
      startDate: "",
      endDate: "",
      status: "",
    },
    {
      lang: "JP",
      title: "",
      content: "",
      startDate: "",
      endDate: "",
      status: "",
    },
  ];

  const [details, setDetails] = useState([]);
  const [items, setItems] = useState(usersData);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "lang", _style: { width: "2%" }, sorter: false },
    { key: "title", _style: { width: "22%" } },
    { key: "content", _style: { width: "32%" } },
    { key: "startDate", _style: { width: "14%" } },
    { key: "endDate", _style: { width: "14%" } },
    { key: "status", _style: { width: "14%" } },
    {
      key: "edit_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "進行中的活動":
        return "success";
      case "已結束":
        return "secondary";

      default:
        return "primary";
    }
  };

  return (
    <>
      {/* <div className="btn-wrapper-mid flex">
                <CButton
                    variant="outline"
                    className="m-2 edit-btn"
                    size="lg"
                    color="warning"
                    // onClick={add}
                >
                    <span className="font-en" onClick={openEdit}>
                        編輯活動
                    </span>
                </CButton>
            </div> */}
      <CDataTable
        items={usersData}
        fields={fields}
        itemsPerPage={4}
        hover
        sorter
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          edit_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size=""
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  編 輯{details.includes(index) ? "Hide" : "Show"}
                </CButton>
              </td>
            );
          },

          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <CDataTable
                    items={usersData}
                    fields={fields}
                    itemsPerPage={1}
                    scopedSlots={{
                      status: (item) => (
                        <td>
                          <CSwitch
                            labelOn={setSwitchOn}
                            // key={key}
                            color="secondary"
                            checked
                            // value={color}
                          />
                        </td>
                      ),
                      edit_details: (item, index) => {
                        return (
                          <td className="py-2">
                            <CButton
                              color="primary"
                              variant="outline"
                              shape="square"
                              size=""
                              onClick={() => {
                                toggleDetails(index);
                              }}
                            >
                              編 輯{details.includes(index) ? "Hide" : "Show"}
                            </CButton>
                          </td>
                        );
                      },
                    }}
                  />
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </>
  );
};

export default DataTableDetailsEdit;
