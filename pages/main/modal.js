function modalWindow() {
    const contentItem = document.querySelectorAll('.friends__content-item');
    const modalBtn = document.querySelectorAll('.friends__item-link');
    const modalWindows = document.querySelectorAll('.modal__window');
    const modalCloseBtn = document.querySelectorAll('.modal__window-close-btn');
    console.log(modalCloseBtn);
    console.log(contentItem);

    contentItem.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(item);
            e.preventDefault();
            console.log(e.target);
            body.classList.add('noscroll');
            let dataName = e.currentTarget.getAttribute('data-name');
            console.log(dataName);
            modalWindows.forEach((el) => {
                el.classList.remove('modal__overlay--active');
            });
            document.querySelector(`[data-modal="${dataName}"]`).classList.add('modal__window--active');
            document.querySelector('.modal__overlay').classList.toggle('modal__overlay--active');
        });
    });
    modalOverlay.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target == modalOverlay) {
            body.classList.remove('noscroll');
            modalWindows.forEach((el) => {
                el.classList.remove('modal__window--active');
            });

            document.querySelector('.modal__overlay').classList.remove('modal__overlay--active');
        }
    });
    modalWindows.forEach(item => {
        item.addEventListener('mouseover', () => {
            modalCloseBtn.forEach(item => {
                item.classList.add('modal__window-close-btn-color');
            });
        });
    });
    modalWindows.forEach(item => {
        item.addEventListener('mouseout', () => {
            modalCloseBtn.forEach(item => {
                item.classList.remove('modal__window-close-btn-color');
            });
        });
    });
    // modalCloseBtn.forEach(item => {
    //     item.addEventListener('mouseover', () => {
    //         modalCloseBtn.forEach(item => {
    //             item.classList.remove('modal__window-close-btn-color');
    //         });
    //     });
    // });

    modalCloseBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            body.classList.remove('noscroll');
            modalWindows.forEach((el) => {
                el.classList.remove('modal__window--active');
            });
            document.querySelector('.modal__overlay').classList.remove('modal__overlay--active');
        });
    });


}