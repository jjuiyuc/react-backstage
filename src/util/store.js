import React from "react";

export const ContextStore = React.createContext({
  token: "",
  setToken: () => {},
  member: {},
  setMember: () => {},
});
