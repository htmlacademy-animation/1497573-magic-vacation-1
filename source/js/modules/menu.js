export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (e) {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      if (e.target.dataset.href === `top`) {
        setTimeout(() => {
          document.querySelector(`.intro__message`).classList.add(`intro__message--shown`);
        }, 100);
      } else {
        setTimeout(() => {
          document.querySelector(`.intro__message`).classList.remove(`intro__message--shown`);
        }, 100);
      }

      if (e.target.dataset.href === `game`) {
        setTimeout(() => {
          document.querySelector(`.form__field`).classList.add(`form__field--full`);
        }, 100);
      } else {
        setTimeout(() => {
          document.querySelector(`.form__field`).classList.remove(`form__field--full`);
        }, 100);
      }
    });
  }
};
