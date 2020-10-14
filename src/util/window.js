export const scrollToBottom = () => {
  const successPageElement = document.getElementById("success-page");
  successPageElement.scrollTop = successPageElement.scrollHeight;
};
