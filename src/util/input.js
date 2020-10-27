import React, { useState } from "react";

export const useInput = ({ type, defaultValue = "", disabled = false }) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => setValue(e.target.value);
  const input = (
    <input value={value} onChange={onChange} type={type} disabled={disabled} />
  );
  return [value, input, setValue];
};
