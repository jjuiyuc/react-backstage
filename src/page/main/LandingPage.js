import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { setToken, useInput, toastError, apiCall } from "@util";

Modal.setAppElement("#root");

const LandingPage = () => {
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const savedAccount = localStorage.getItem("account") || "";
  const [hint, setHint] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [account, accountInput] = useInput({
    type: "text",
    defaultValue: savedAccount,
  });
  const [password, passwordInput] = useInput({ type: "password" });
  const isFilled = account && password;
  const submit = () => {
    if (isClicked) return; // prevent multiple clicks
    setIsSubmitted(true);
    if (!isFilled) return setHint("每欄皆為必填");
    setHint("");
    const onSuccess = (data) => {
      const { fbclid, completed, api_token } = data;
      localStorage.setItem("account", account);
      const queryStr = queryString.stringify({ fbclid });
      setToken(api_token);
      if (!completed) history.push(`/incomplete?${queryStr}`);
      else history.push(`/success?${queryStr}`);
    };
    const onError = (err) => {
      toastError(err);
      setIsClicked(false);
    };
    const data = { account, password };
    apiCall({ url: "auth", method: "post", data, onSuccess, onError });
  };
  return (
    <Fragment>
      <div className="landing-page flex">
        <div className="landing-title font-en">
          HuaYu Fertility Center APP Backstage
        </div>
        <div
          className="login-button  font-primary cursor-pointer"
          onClick={openModal}
        >
          登入
        </div>
        <Modal isOpen={modalIsOpen} className="login-modal">
          <div
            onClick={closeModal}
            className="close-button cursor-pointer font-primary"
          >
            X
          </div>
          <div className="field font-en font-bold font-secondary">
            Account
            <div className="input-container">
              {accountInput} <label for="text" class="label-name"></label>
            </div>
          </div>
          <div className="field font-en font-bold font-secondary">
            Password
            <div className="input-container">
              {passwordInput} <label for="text" class="label-name"></label>
            </div>
          </div>
          <div className="a-wrapper">
            <Link to="/recovery" className="font-orange">
              忘記密碼？
            </Link>
          </div>
          {isSubmitted && <div className="hint">{hint}</div>}
          <div className="button-wrapper">
            <div className="submit-button" onClick={submit}>
              登入
            </div>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default LandingPage;
