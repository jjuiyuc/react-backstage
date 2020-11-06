import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainContainer, AddForm } from "@component";

import {
  // useInput,
  toastError,
  toastDark,
} from "@util";

const EventAddPage = () => {
  const history = useHistory();
  // const [hint, setHint] = useState("");
  // // const [date, DateInput] = useInput({ type: "date" });
  // const [isadded, setIsAdded] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  // const add = () => {
  //     if (isClicked) return; // prevent multiple clicks
  //     setIsAdded(true);
  //     if (!isClicked) toastDark();
  //     setHint("");
  //     setIsClicked(true);

  //     const onSuccess = () => {
  //         history.push("/verify");
  //     };
  //     const onError = (err) => {
  //         toastError(err);
  //         setIsClicked(false);
  //     };
  // };

  return (
    <>
      <MainContainer>
        <AddForm />
      </MainContainer>
    </>
  );
};
export default EventAddPage;
