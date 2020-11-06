import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

import {
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CDateInput,
  CButton,
} from "@coreui/react";

import {
  useInput,
  toastSuccess,
  toastError,
  toastDark,
  ContextStore,
} from "@util";

const AddForm = () => {
  const history = useHistory();
  const { action } = useContext(ContextStore);

  const { title: _title, dateStart: _dateStart, dateEnd: _dateEnd } = action;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hint, setHint] = useState("");

  const [title, titleInput] = useInput({
    type: "text",
    defaultValue: _title,
  });
  const [dateStart, dateStartInput] = useInput({
    type: "datetime-local",
    defaultValue: _dateStart,
  });
  const [dateEnd, dateEndInput] = useInput({
    type: "datetime-local",
    defaultValue: _dateEnd,
  });

  const isFilled = title && dateStart && dateEnd;

  const submit = () => {
    setIsSubmitted(true);
    if (!isFilled) return setHint("每欄皆為必填");
    setHint("");
    const data = { title, dateStart, dateEnd };
    const onSuccess = () => {
      toastSuccess("建立成功");
      history.push("/announcement");
    };
    const onError = (err) => {
      toastError(err);
    };
    // apiCall({
    //     url: `backend/users/${id}`,
    //     method: "put",
    //     data,
    //     onSuccess,
    //     onError,
    // });
  };

  return (
    <>
      <div className="add-form-container">
        <div className="page-head flex">
          <div className="page-title font-primary">建立新消息</div>
        </div>
        <CRow>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup className="row">
                <div className="label-wrapper col-2">
                  <CLabel htmlFor="nf-email" className="form-label">
                    活動名稱
                  </CLabel>
                </div>
                <div className="col-md-5">
                  <CInput
                    type="text"
                    id="text-input"
                    name="text-input"
                    // autoComplete="email"
                  />
                </div>
              </CFormGroup>
              <CFormGroup className="row">
                <div className="label-wrapper col-2">
                  <CLabel htmlFor="date-input" className="form-label">
                    活動期間
                  </CLabel>
                </div>

                <div className="col-md-3" id="date-input" name="date-input">
                  {dateStartInput}
                </div>

                <div className="mt-2">_</div>
                <div
                  className="col-md-3 ml-3"
                  id="date-input"
                  name="date-input"
                >
                  {dateEndInput}
                </div>
              </CFormGroup>
            </CForm>
            {isSubmitted && <div className="hint">{hint}</div>}
            <div className="btn-wrapper">
              <CButton
                variant="outline"
                className="m-2 add-btn btn-gold"
                size="lg"
                color="warning"
                onClick={submit}
              >
                <span className="font-en">儲存並繼續</span>
              </CButton>
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
};
export default AddForm;
