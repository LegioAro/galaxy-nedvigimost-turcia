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
      const select = document.querySelector('.val-select');
      const selectValue = select.value;
      let regVal = /[0-9]+/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }

      let resultRegArr = resultReg.split('');

      select.addEventListener('change', (e) => {
        input.value = '';
      });

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
});
