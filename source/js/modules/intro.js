export default () => {
  setTimeout(() => {
    document.querySelector(`.intro__message`).classList.add(`intro__message--shown`);
  }, 100);
};
