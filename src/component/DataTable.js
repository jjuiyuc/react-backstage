import React, { useState, useEffect } from "react";
import { CDataTable, CBadge, CButton, CCollapse } from "@coreui/react";
import { apiCall } from "@util";

const DataTable = (props) => {
  const usersData = [
    {
      id: 0,
      name: "John Doe",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 1,
      name: "Samppa Nori",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 2,
      name: "Estavan Lykos",
      startDate: "2018-01-01 09:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      startDate: "2018-02-01 10:00",
      endDate: "2018-01-01 09:00",

      status: "已結束",
    },
    {
      id: 4,
      name: "Derick Maximinus",
      startDate: "2018-03-01 10:00",
      endDate: "2018-01-01 09:00",

      status: "已結束",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      startDate: "2020-01-21 13:00",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      startDate: "2020-01-21 13:00",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      startDate: "2020-03-21 13:00",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 8,
      name: "Quintin Ed",
      startDate: "2018/02/01 11:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      startDate: "2020-09-03 14:00",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      startDate: "2018/01/21",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      startDate: "2018/01/01",
      endDate: "2018-01-01 09:00",
      status: "進行中的活動",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      startDate: "2018/02/01",
      endDate: "2018-01-01 09:00",
      status: "已結束",
    },
  ];
  const [details, setDetails] = useState([]);
  const [data, setData] = useState([]);
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

  useEffect(() => {
    apiCall({
      url: "announcement",
      onSuccess: (d) => {
        setData(d);
      },
    });
  }, []);
  console.log({ data });
  const fields = [
    { key: "name", _style: { width: "26%" } },
    { key: "startDate", _style: { width: "16%" } },
    { key: "endDate", _style: { width: "16%" } },
    { key: "status", _style: { width: "14%" } },
    // { key: "role", _style: { width: "14%" } },
    {
      key: "edit_details",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "delete_details",
      label: "",
      _style: { width: "8%" },
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
      <CDataTable
        items={usersData}
        fields={fields}
        // columnFilter
        tableFilter
        // footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
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

export default DataTable;
