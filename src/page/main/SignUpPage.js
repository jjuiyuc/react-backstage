import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Footer, Radio } from "@component";
import {
  apiCall,
  testPasswordRegExp,
  useInput,
  toastError,
  toastDark,
  toastSuccess,
} from "@util";

const SignUpPage = () => {
  const history = useHistory();
  const [hint, setHint] = useState("");
  const [name, nameInput] = useInput({ type: "text" });
  const [username, usernameInput] = useInput({ type: "email" });
  const [password, passwordInput] = useInput({ type: "password" });
  const [confirmPassword, confirmPasswordInput] = useInput({
    type: "password",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isFilled = name && username && password;
  const passwordValid = testPasswordRegExp(password);
  const passwordMatched =
    password && confirmPassword && password === confirmPassword;

  const submit = () => {
    if (isClicked) return; // prevent multiple clicks
    setIsSubmitted(true);
    if (!isFilled) return setHint("每欄皆為必填");
    if (!passwordValid) return setHint("密碼必須 6 位以上英數字");
    if (!passwordMatched) return setHint("請再次確認密碼");
    if (!isClicked) toastDark();
    setHint("");
    setIsClicked(true);
    const data = {
      name,
      username,
      password,
    };
    const onSuccess = () => {
      toastSuccess("註冊成功");
      history.push("/verify");
    };
    const onError = (err) => {
      toastError(err);
      setIsClicked(false);
    };
    apiCall({ url: "users", method: "post", data, onSuccess, onError });
  };
  return (
    <>
      <div className="signup-page font-primary font-bold flex">
        <div className="form-section">
          <div className="title">
            <div className="font-en">SIGN UP</div>
            <div>註冊</div>
          </div>
          <div className="form">
            <div className="field name">
              <div className="mt-s  mb-2 mx-1">
                <span className="font-en">NAME</span>
                <span className="font-secondary"> 姓名</span>
              </div>
              <div className="input-container mx-1">
                {nameInput}
                <label for="text" class="label-name"></label>
              </div>
            </div>

            <div className="field username">
              <div className="mt-s  mb-2 mx-1">
                <span className="font-en">USERNAME</span>
                <span className="font-secondary"> 帳號</span>
              </div>
              <div className="input-container mx-1">
                {usernameInput}
                <label for="text" class="label-name"></label>
              </div>
            </div>
            <div className="field password">
              <div className="mt-s  mb-2 mx-1">
                <span className="font-en">PASSWORD</span>
                <span className="font-secondary">
                  {" "}
                  密碼（六位數以上英數字）
                </span>
              </div>
              <div className="input-container mx-1">
                {passwordInput}
                <label for="text" class="label-name"></label>
              </div>
            </div>
            <div className="field confirm">
              <div className="mt-s  mb-2 mx-1">
                <span className="font-en">CONFIRM PASSWORD</span>
                <span className="font-secondary"> 確認密碼</span>
              </div>
              <div className="input-container mx-1">
                {confirmPasswordInput}
                <label for="text" class="label-name"></label>
              </div>
            </div>
          </div>
        </div>

        {isSubmitted && <div className="hint">{hint}</div>}
        <br />
        <div className="submit-button confirm-btn" onClick={submit}>
          <span className="font-en">CONFIRM</span> 確認
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
