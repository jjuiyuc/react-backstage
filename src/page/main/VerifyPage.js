import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const VerifyPage = () => {
  return (
    <Fragment>
      <div className="verify-page">
        <div className="font-primary margin-bottom-05">
          請查看信箱收取驗證信！
        </div>

        <div className="button-wrapper btn-verify">
          <Link to="/" className="submit-button">
            <span className="font-en">HOME</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VerifyPage;
