export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let list = socialBlock.querySelector(`.social-block__list`);
  let icons = socialBlock.querySelectorAll(`.js-social-menu-item`);
  let toggler = socialBlock.querySelector(`.js-social-toggler`);

  const showSocialBlockList = () => {
    list.classList.add(`social-block__list--opened`);
    for (let i = 0; i < icons.length; i++) {
      setTimeout(() => {
        icons[i].classList.add(`social-block__item--show`);
      }, 200 * i);
    }
  };

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    showSocialBlockList();
  });

  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    if (!toggler.classList.contains(`social-block__toggler--open`)) {

      list.classList.remove(`social-block__list--opened`);
      for (let i = 0; i < icons.length; i++) {
        setTimeout(() => {
          icons[i].classList.remove(`social-block__item--show`);
        }, 200 * i);
      }
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
