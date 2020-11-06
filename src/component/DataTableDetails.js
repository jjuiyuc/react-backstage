import React, { useState } from "react";
import {
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react";

const DataTableDetails = (props) => {
  const usersData = [
    {
      id: 0,
      lang: "TW",
      title: "John Doe",
      content: "John Doe",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 1,
      lang: "CN",
      title: "Samppa Nori",
      content: "John Doe",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 2,
      lang: "EN",
      title: "Estavan Lykos",
      content: "John Doe",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 3,
      lang: "JP",
      title: "Chetan Mohamed",
      content: "John Doe",
      startDate: "2018-02-01 10:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
  ];
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  // const toggleDetails = (index) => {
  //     const position = details.indexOf(index);
  //     let newDetails = details.slice();
  //     if (position !== -1) {
  //         newDetails.splice(position, 1);
  //     } else {
  //         newDetails = [...details, index];
  //     }
  //     setDetails(newDetails);
  // };

  const fields = [
    { key: "lang", _style: { width: "2%" }, sorter: false },
    { key: "title", _style: { width: "22%" } },
    { key: "content", _style: { width: "32%" } },
    { key: "startDate", _style: { width: "14%" } },
    { key: "endDate", _style: { width: "14%" } },
    { key: "status", _style: { width: "14%" } },
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
      <CDataTable
        items={usersData}
        fields={fields}
        // columnFilter
        // footer
        // itemsPerPageSelect
        itemsPerPage={4}
        hover
        sorter
        // pagination
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
                  // onClick={() => {
                  //     toggleDetails(index);
                  // }}
                >
                  編 輯 {/* {details.includes(index) ? "Hide" : "Show"} */}
                </CButton>
              </td>
            );
          },
          delete_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="danger"
                  variant="outline"
                  shape="square"
                  size=""
                  // onClick={() => {
                  //     toggleDetails(index);
                  // }}
                >
                  刪 除 {/* {details.includes(index) ? "Hide" : "Show"} */}
                </CButton>
              </td>
            );
          },
          // details: (item, index) => {
          //     return (
          //         <CCollapse show={details.includes(index)}>
          //             <CCardBody>
          //                 {/* <h4>{item.username}</h4>
          //                 <p className="text-muted">
          //                     User since: {item.startDate}
          //                 </p> */}
          //                 <CButton size="" color="info">
          //                     Edit
          //                 </CButton>
          //                 <CButton
          //                     size=""
          //                     color="danger"
          //                     variant="outline"
          //                     className="ml-1"
          //                 >
          //                     Delete
          //                 </CButton>
          //             </CCardBody>
          //         </CCollapse>
          //     );
          // },
        }}
      />
    </>
  );
};

export default DataTableDetails;
