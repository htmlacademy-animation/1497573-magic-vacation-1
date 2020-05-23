export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let icons = socialBlock.querySelectorAll(`.js-social-menu-item`);
  let toggler = socialBlock.querySelector(`.js-social-toggler`);

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    for (let i = 0; i < icons.length; i++) {
      setTimeout(() => {
        icons[i].classList.add(`social-block__item--show`);
      }, 200 * i);
    }
  });

  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    for (let i = 0; i < icons.length; i++) {
      setTimeout(() => {
        icons[i].classList.remove(`social-block__item--show`);
      }, 200 * i);
    }
  });

  toggler.addEventListener(`click`, function () {
    if (!toggler.classList.contains(`social-block__toggler--open`)) {
      toggler.classList.add(`social-block__toggler--open`);
    } else {
      toggler.classList.remove(`social-block__toggler--open`);
    }
  });
};
