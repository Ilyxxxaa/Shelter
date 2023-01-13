const friends = document.querySelector('.friends__items-inner');
const modalOverlay = document.querySelector('.modal__overlay');

async function getFriends() {
  const response = await fetch('pets.json');
  const friendsArray = await response.json();
  renderPets(friendsArray);
  paginationStart(friendsArray);
  modalWindow();
}
getFriends();

function renderPets(array) {
  array.forEach((item) => {
    const petsHTML = `<div class="friends__content-item" data-name="${item.name}">
<img class="friends__item-img" src=${item.img} alt=${item.name}>
<div class="friends__item-name">${item.name}</div>
<a class="friends__item-link" href="#">Learn more</a>
</div>`;
    friends.insertAdjacentHTML('beforeend', petsHTML);
    const petsModalHTML = `<div class="modal__window" data-modal ="${item.name}">
        <div class="modal__window-close-btn"></div>
        <div class="modal__img"><img class="modal__img-img" src="${item.img}" alt="${item.name}"></div>
        <div class="modal__content">
            <div class="modal__content-title">${item.name}</div>
            <div class="modal__content-subtitle">${item.type} - ${item.breed}</div>
            <div class="modal__content-descr">${item.description}</div>
            <ul class="modal__content-list">
                <li class="modal__content-list-item"><span>Age:</span>${item.age} </li>
                <li class="modal__content-list-item"><span>Inoculations:</span> ${item.inoculations}</li>
                <li class="modal__content-list-item"><span>Diseases:</span> ${item.diseases}</li>
                <li class="modal__content-list-item"><span>Parasites:</span> ${item.parasites} </li>
            </ul>
        </div>
    </div>`;
    modalOverlay.insertAdjacentHTML('beforeend', petsModalHTML);
  });
}
