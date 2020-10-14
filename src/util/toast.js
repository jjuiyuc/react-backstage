import { toast } from "react-toastify";

export const toastError = (text = "⠀送出失敗，請稍後重試") =>
  toast.error(text, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const toastDark = (text = "⠀送出中") =>
  toast(text, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { background: "black" },
  });

export const toastSuccess = (text = "⠀送出成功") =>
  toast.success(text, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
