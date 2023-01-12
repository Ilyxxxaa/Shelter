function sliderActive(array) {
    console.log(array);

    const arrowRight = document.querySelector('.friends__items-arrow--right');
    const arrowLeft = document.querySelector('.friends__items-arrow--left');
    const slider = document.querySelector('.friends__items-slider');
    const ITEM_LEFT = document.querySelector('#item-left');
    const ITEM_RIGHT = document.querySelector('#item-right');
    const CURRENT_ITEM = document.querySelector('#item-active');



    arrowLeft.addEventListener('click', moveLeft);
    arrowRight.addEventListener('click', moveRight);

    let slideArr = [];
    while (slideArr.length < 3) {
        let number = Math.floor(Math.random() * 8);
        if (!slideArr.includes(number)) {
            slideArr.push(number);
        }
    }

    for (let i = 0; i < CURRENT_ITEM.children.length; i++) {
        CURRENT_ITEM.children[i].children[0].src = array[slideArr[i]].img;
        CURRENT_ITEM.children[i].children[1].innerHTML = array[slideArr[i]].name;
        CURRENT_ITEM.children[i].dataset.name = array[slideArr[i]].name;
        CURRENT_ITEM.children[i].children[2].dataset.name = array[slideArr[i]].name;
    }


    console.log(slideArr);
    console.log(CURRENT_ITEM.children);
    console.log(array[slideArr[1]].img);


    const updateSLideArr = () => {
        while (slideArr.length < 6) {
            let number = Math.floor(Math.random() * 8);
            if (!slideArr.includes(number)) {
                slideArr.push(number);
            }
        }
        slideArr.splice(0, 3);
        console.log(slideArr);
    };
    // updateSLideArr();


    const createCardTemplate = function() {
        const card = document.createElement('div');
        card.classList.add('friends__content-item');
        return card;
    };

    createCardTemplate();











    slider.addEventListener('animationend', (e) => { //все, что происходит после конца анимации
        arrowLeft.addEventListener('click', moveLeft);
        arrowRight.addEventListener('click', moveRight);
        let newItem;
        if (e.animationName == 'move-left') {
            console.log('left');
            newItem = ITEM_LEFT; //   в переменную newItem передал , что это именно item-left, а не какой-то другой( внизу я буду менять содержимое newItem, следовательно и содержимое left-item);
            slider.classList.remove('move_left'); // удаляю класс move-left чтобы в след раз можно было его добавить через кнопку и прошла анимация
            const leftItems = ITEM_LEFT.innerHTML; // в переменную leftItems записал содержимое html существующего левого itema  

            CURRENT_ITEM.innerHTML = leftItems; //  передал содержимое левого айтема в Active item;
        } else {
            console.log('right');
            newItem = ITEM_RIGHT; //   в переменную newItem передал , что это именно item-left, а не какой-то другой( внизу я буду менять содержимое newItem, следовательно и содержимое left-item);
            slider.classList.remove('move_right'); // удаляю класс move-right чтобы в след раз можно было его добавить через кнопку и прошла анимация
            const rightItems = ITEM_RIGHT.innerHTML; // в переменную leftItems записал содержимое html существующего правого itema  

            CURRENT_ITEM.innerHTML = rightItems; //  передал содержимое левого айтема в Active item;
        }
        modalWindow();
    });



    const createSliderItem = (item) => {
        updateSLideArr();
        item.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const card = createCardTemplate();
            card.setAttribute('data-name', `${array[slideArr[i]].name}`);
            const cardImg = document.createElement('img');
            cardImg.classList.add('friends__item-img');
            cardImg.src = array[slideArr[i]].img;
            const cardName = document.createElement('div');
            cardName.classList.add('friends__item-name');
            cardName.innerHTML = array[slideArr[i]].name;
            const cardButton = document.createElement('a');
            cardButton.classList.add('friends__item-link');
            cardButton.setAttribute('data-name', `${array[slideArr[i]].name}`);
            cardButton.innerHTML = 'Learn More';
            card.append(cardImg, cardName, cardButton);
            item.appendChild(card);
        }
    };



    function moveLeft() { //  функция , кот отвечает за передвижение слайдера влево , а после удаление со стрелки слушателя

        slider.classList.add('move_left');
        console.log('влево');
        arrowLeft.removeEventListener('click', moveLeft);
        arrowRight.removeEventListener('click', moveRight);
        createSliderItem(ITEM_LEFT);
    }

    function moveRight() { //  функция , кот отвечает за передвижение слайдера вправо , а после удаление со стрелки слушателя

        slider.classList.add('move_right');
        console.log('вправо');
        arrowRight.removeEventListener('click', moveRight);
        arrowLeft.removeEventListener('click', moveLeft);
        createSliderItem(ITEM_RIGHT);
    }
}