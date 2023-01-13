function paginationStart(array) {
  const doubleBtnLeft = document.querySelector('.double__btn-left');
  const doubleBtnRight = document.querySelector('.double__btn-right');
  const singleBtnRight = document.querySelector('.single__btn-right');
  const singleBtnLeft = document.querySelector('.single__btn-left');
  const doubleBtns = document.querySelectorAll('.double__btn');
  const singleBtns = document.querySelectorAll('.single__btn');
  const cards = document.querySelectorAll('.friends__content-item');
  const pageNumber = document.querySelector('.friends__btn--active');

  let paginationArr = [];
  let counter = 0;
  while (paginationArr.length < 8) {
    let number = Math.floor(Math.random() * 8);
    if (!paginationArr.includes(number)) {
      paginationArr.push(number);
    }
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i); // no +1 here!
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function createNewPaginationArr() {
    shuffleArray(paginationArr);
  }

  createSliderItem(cards);

  singleBtnLeft.addEventListener('click', pressSingleBtnLeft);
  doubleBtnLeft.addEventListener('click', pressDoubleBtnLeft);
  singleBtnRight.addEventListener('click', pressSingleBtnRight);
  doubleBtnRight.addEventListener('click', pressDoubleBtnRight);

  function pressSingleBtnLeft() {
    if (counter > 0) {
      createSliderItem(cards);
      counter--;
      pageNumber.innerText = counter + 1;
      checkDisabledBtn();
    }
  }

  function pressSingleBtnRight() {
    if (window.innerWidth > 1279) {
      if (counter >= 0 && counter < 5) {
        createSliderItem(cards);
        counter++;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
      if (counter >= 0 && counter < 7) {
        createSliderItem(cards);
        counter++;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    } else {
      if (counter >= 0 && counter < 15) {
        createSliderItem(cards);
        counter++;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    }
  }

  function pressDoubleBtnRight() {
    if (window.innerWidth > 1279) {
      if (counter !== 5) {
        createSliderItem(cards);
        counter = 5;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
      if (counter !== 7) {
        createSliderItem(cards);
        counter = 7;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    } else {
      if (counter !== 15) {
        createSliderItem(cards);
        counter = 15;
        pageNumber.innerText = counter + 1;
        checkDisabledBtn();
      }
    }
  }

  function pressDoubleBtnLeft() {
    if (counter !== 0) {
      createSliderItem(cards);
      counter = 0;
      pageNumber.innerText = counter + 1;
      checkDisabledBtn();
    }
  }

  function checkDisabledBtn() {
    if (window.innerWidth > 1279) {
      if (counter == 5) {
        doubleBtnRight.classList.add('friends__btn--disabled');
        singleBtnRight.classList.add('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnLeft.classList.remove('friends__btn--disabled');
      } else if (counter > 0 && counter < 5) {
        singleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      } else if (counter == 0) {
        doubleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      }
    } else if (window.innerWidth < 1279 && window.innerWidth > 767) {
      if (counter == 7) {
        doubleBtnRight.classList.add('friends__btn--disabled');
        singleBtnRight.classList.add('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnLeft.classList.remove('friends__btn--disabled');
      } else if (counter > 0 && counter < 7) {
        singleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      } else if (counter == 0) {
        doubleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      }
    } else {
      if (counter == 15) {
        doubleBtnRight.classList.add('friends__btn--disabled');
        singleBtnRight.classList.add('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnLeft.classList.remove('friends__btn--disabled');
      } else if (counter > 0 && counter < 15) {
        singleBtnLeft.classList.remove('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnLeft.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      } else if (counter == 0) {
        doubleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnLeft.classList.add('friends__btn--disabled');
        singleBtnRight.classList.remove('friends__btn--disabled');
        doubleBtnRight.classList.remove('friends__btn--disabled');
      }
    }
  }

  function createSliderItem(items) {
    i = 0;
    items.forEach(function (item, i) {
      item.innerHTML = '';
      item.setAttribute('data-name', `${array[paginationArr[i]].name}`);
      const cardImg = document.createElement('img');
      cardImg.classList.add('friends__item-img');
      cardImg.src = array[paginationArr[i]].img;
      const cardName = document.createElement('div');
      cardName.classList.add('friends__item-name');
      cardName.innerHTML = array[paginationArr[i]].name;
      const cardButton = document.createElement('a');
      cardButton.classList.add('friends__item-link');
      cardButton.setAttribute('data-name', `${array[paginationArr[i]].name}`);
      cardButton.innerHTML = 'Learn More';
      item.append(cardImg, cardName, cardButton);
      i++;
    });
    createNewPaginationArr();
  }
}
