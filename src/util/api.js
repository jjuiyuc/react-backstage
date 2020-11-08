import axios from "axios";
import { API_HOST } from "@constant";

export const apiCall = ({
  url = "/",
  method = "get",
  data = {},
  contentType = "",
  onSuccess = () => {},
  onError = () => {},
}) => {
  try {
    url = `${API_HOST}/${url}`;
    const token = getToken();
    const _token = token ? { Authorization: `Bearer ${token}` } : {};
    const _contentType = contentType ? { "Content-Type": contentType } : {};
    const headers = { ..._token, ..._contentType };
    axios({ method, url, data, headers })
      .then((res) => {
        if (res.status === 200) onSuccess(res.data);
        else console.log(res.status, res);
      })
      .catch((err) => {
        // onError(err.response.data.errors);
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }
};

export const getToken = () => localStorage.getItem("at") || "";

export const setToken = (token) => localStorage.setItem("at", token);

// export const getAnnouncementList = ()=>{
//   const url = 'http://54.238.13.73:5000/api/0.3.0/announcement/'
//   const method = 'get'
// }
