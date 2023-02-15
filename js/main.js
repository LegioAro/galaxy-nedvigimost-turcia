isResize('.header__imgs', '.header__wrapper', '.header__mob', 768);
isResize(
  '.projects__item.one .projects__item-img',
  '.projects__item.one',
  '.projects__item.one .projects__item-mob',
  768,
);
isResize(
  '.projects__item.two .projects__item-img',
  '.projects__item.two',
  '.projects__item.two .projects__item-mob',
  768,
);
isResize('.tmpl__imgs', '.tmpl__wrapper', '.tmpl__mob', 768, 'first');

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.charts__arrow-r',
    prevEl: '.charts__arrow-l',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModal();
isModalClose();

window.addEventListener('resize', () => {
  isResize('.header__imgs', '.header__wrapper', '.header__mob', 768);
  isResize(
    '.projects__item.one .projects__item-img',
    '.projects__item.one',
    '.projects__item.one .projects__item-mob',
    768,
  );
  isResize(
    '.projects__item.two .projects__item-img',
    '.projects__item.two',
    '.projects__item.two .projects__item-mob',
    768,
  );
  isResize('.tmpl__imgs', '.tmpl__wrapper', '.tmpl__mob', 768, 'first');
});

const form = document.querySelector('.modal__wrapper');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let formInputs = form.querySelectorAll('input');
  let result = true;

  formInputs.forEach((input) => {
    if (input.classList.contains('novalid')) {
      result = false;
    }
  });

  if (result) {
    form.submit();
  }
});
