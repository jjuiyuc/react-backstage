import React from "react";
import { Message } from "./medicine";

const Preview = (props) => {
  return (
    <div className="preview">
      <h2>預覽</h2>
      <Message {...props} />
    </div>
  );
};

export default Preview;
