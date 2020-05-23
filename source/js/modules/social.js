export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let socialBlockItems = socialBlock.querySelectorAll(`.social-block__item`);

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    for (let i = 0; i < socialBlockItems.length; i++) {
      setTimeout(() => {
        socialBlockItems[i].classList.add(`social-block__item--show`);
      }, 200 * i);
    }
  });

  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    for (let i = 0; i < socialBlockItems.length; i++) {
      setTimeout(() => {
        socialBlockItems[i].classList.remove(`social-block__item--show`);
      }, 200 * i);
    }
  });
};
