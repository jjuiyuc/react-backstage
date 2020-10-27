import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import queryString from "query-string";
// import { Link } from "react-router-dom";
// import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { setToken, useInput, toastError, apiCall } from "@util";

Modal.setAppElement("#root");

const LandingPage = () => {
  const history = useHistory();

  const savedEmail = localStorage.getItem("email") || "";
  const [hint, setHint] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [email, emailInput] = useInput({
    type: "text",
    defaultValue: savedEmail,
  });
  const [password, passwordInput] = useInput({ type: "password" });
  const isFilled = email && password;
  const submit = () => {
    if (isClicked) return; // prevent multiple clicks
    setIsSubmitted(true);
    if (!isFilled) return setHint("每欄皆為必填");
    setHint("");
    const onSuccess = (data) => {
      const { fbclid, completed, api_token } = data;
      localStorage.setItem("email", email);
      const queryStr = queryString.stringify({ fbclid });
      setToken(api_token);
      if (!completed) history.push(`/incomplete?${queryStr}`);
      else history.push(`/success?${queryStr}`);
    };
    const onError = (err) => {
      toastError(err);
      setIsClicked(false);
    };
    const data = { email, password };
    apiCall({ url: "auth", method: "post", data, onSuccess, onError });
  };
  return (
    <Fragment>
      <div className="landing-page">
        <div className="field font-en">
          Email
          <div className="input-container">
            {emailInput} <label for="text" class="label-name"></label>
          </div>
        </div>
        <div className="field font-en">
          Password
          <div className="input-container">
            {passwordInput} <label for="text" class="label-name"></label>
          </div>
        </div>
        <div className="a-wrapper">
          {/* <Link to="/recovery" className="font-orange"> */}
          忘記密碼？
          {/* </Link> */}
        </div>
        {isSubmitted && <div className="hint">{hint}</div>}
        <div className="button-wrapper">
          <div className="submit-button" onClick={submit}>
            登入
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
