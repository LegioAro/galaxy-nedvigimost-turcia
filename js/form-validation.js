///
function selectCounties() {
  const select = document.querySelector('.modal__input-select');
  const selectResult = select.querySelector('.modal__input-select-result');
  const selectItems = select.querySelectorAll('.modal__input-select-item label');

  selectResult.addEventListener('click', () => {
    select.classList.toggle('active');
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', () => {
      const itemImgSrc = item.querySelector('img').getAttribute('src');
      const resultImg = selectResult.querySelector('.modal__input-select-result-img img');
      resultImg.setAttribute('src', itemImgSrc);

      select.classList.remove('active');
    });
  });
  selectItems[0].click();
}
selectCounties();

const inputs = document.querySelectorAll('.val');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let inputValue = input.value;
    let resultReg = '';
    let newValue = '';
    if (input.classList.contains('val-telegram')) {
      const regVal = /[a-z\.\-\_]+/gis;
      let regArr = inputValue.matchAll(regVal);

      for (let elem of regArr) {
        resultReg += String(elem);
      }

      newValue = '@' + resultReg;
      if (newValue.length < 4) {
        input.classList.add('novalid');
      } else {
        input.classList.remove('novalid');
      }
    }

    if (input.classList.contains('val-name')) {
      const regVal = /[a-zа-я\s\-]+/gis;
      const regName = /([a-zа-я])+/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }
      newValue = resultReg;

      if (newValue.length >= 3 && regName.test(newValue)) {
        input.classList.remove('novalid');
      } else {
        input.classList.add('novalid');
      }
    }

    if (input.classList.contains('val-email')) {
      let regEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
      let regVal = /[-.\w@]/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }
      newValue = resultReg;
      if (newValue.length >= 3 && regEmail.test(newValue)) {
        input.classList.remove('novalid');
      } else {
        input.classList.add('novalid');
      }
    }

    if (input.classList.contains('val-tel')) {
      let regTel;

      const select = document.querySelector('.modal__input-select-item input:checked');
      const selectValue = select.value;
      let regVal = /[0-9]+/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }

      let resultRegArr = resultReg.split('');

      if (selectValue == 'ru') {
        regTel = /^\+?[78]\s\(\d{3}\)\s\d{3}-\d{2}-\d{0,3}$/g;
        input.setAttribute('maxlength', '18');
        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 0, '+');
          }
          if (i == 2) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 6) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 10 || i == 13) {
            resultRegArr.splice(i, 0, '-');
          }
          resultReg = resultRegArr.join('');
          newValue = resultReg;

          if (newValue.length >= 18 && regTel.test(newValue)) {
            input.classList.remove('novalid');
          } else {
            input.classList.add('novalid');
          }
        }
      }

      if (selectValue == 'ukr') {
        regTel = /^\+?3\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;
        input.setAttribute('maxlength', '19');

        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 2, '+38');
          }
          if (i == 1) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 5) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 9 || i == 12) {
            resultRegArr.splice(i, 0, '-');
          }
        }
        resultReg = resultRegArr.join('');
        newValue = resultReg;

        if (newValue.length >= 19 && regTel.test(newValue)) {
          input.classList.remove('novalid');
        } else {
          input.classList.add('novalid');
        }
      }

      if (selectValue == 'tur') {
        regTel = /^\+?90\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;
        input.setAttribute('maxlength', '19');
        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 0, '+');
          }
          if (i == 3) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 7) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 11 || i == 14) {
            resultRegArr.splice(i, 0, '-');
          }
        }
        resultReg = resultRegArr.join('');
        newValue = resultReg;

        if (newValue.length >= 19 && regTel.test(newValue)) {
          input.classList.remove('novalid');
        } else {
          input.classList.add('novalid');
        }
      }
    }

    input.value = newValue;
  });
  const selects = document.querySelectorAll('.modal__input-select-item input');
  selects.forEach((item) => {
    console.log('123');
    item.addEventListener('change', (e) => {
      if (input.classList.contains('val-tel')) {
        input.value = '';
      }
    });
  });

  input.addEventListener('focus', () => {
    if (input.value.length < 1) {
      const select = document.querySelector('.modal__input-select-item input:checked');
      if (select.value == 'ukr' && input.classList.contains('val-tel')) {
        input.value = '+38';
      } else if (select.value == 'tur' && input.classList.contains('val-tel')) {
        input.value = '+90';
      }
    }
  });
});
