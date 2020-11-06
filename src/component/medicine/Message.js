import React from "react";
import Image from "./Image";
import Delayed from "../Delayed";

const Message = (props) => {
  const { type, delayed } = props;
  const children = type === "image" ? <Image {...props} /> : null;
  if (delayed > 0) {
    return <Delayed waitBeforeShow={delayed * 1000}>{children}</Delayed>;
  }
  return children;
};

export default Message;
