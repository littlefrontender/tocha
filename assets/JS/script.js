function slider(nav, block, shift) {
    let btn = document.querySelectorAll(nav);
    let blk = document.querySelector(block);

    function removing(btn) {
        btn.forEach(function(item) {
            item.classList.remove('active');});
        }

        for (let i=0; i<btn.length;i++) {
            btn[i].addEventListener('click', function() {
                removing(btn);
                blk.style.left = i*(shift) + 'px';
                btn[i].classList.add('active');
            }); 
        }
}

// Slider отзывов в блоке Testimonials

slider('.slider__toggle', '.testimonials__block', -570);

// Slider отзывов в блоке Testimonials при ширине экрана 375px

slider('.sliderX375__toggle', '.testimonials__block', -358);

// Slider в блоке Tarif

slider('.sliderTarif__toggle', '.tarif__slider', -350);


// Slider в блоке Steps

slider('.sliderSteps__toggle', '.steps__sliderblock', -243);


// Модальное окно

const signInBtn = document.querySelector('.header__signin'),
      signInPopup = document.querySelector('.signInPopup'),
      logInBtn = document.querySelector('.header__login'),
      logInPopup = document.querySelector('.logInPopup'),
      closeSignIn = document.querySelector('#closeSignIn'),
      closeLogIn = document.querySelector('#closeLogIn');

      
    function openPopup(e, popup) {
        e.preventDefault();
        popup.classList.remove('closePopup');
        popup.classList.add('showPopup');
        document.body.style.overflow = 'hidden'; // Убираем прокрутку
    }

      signInBtn.addEventListener('click', (e) => {
        openPopup(e, signInPopup);
      });

      logInBtn.addEventListener('click', (e) => {
        openPopup(e, logInPopup);
    });

// Закрываем модальные окна

function closePopup(e, popup) {
    e.preventDefault();
    popup.classList.add('closePopup');
    popup.classList.remove('showPopup');
    document.body.style.overflow = ''; // Возвращаем прокрутку
}

closeSignIn.addEventListener('click', (e) => {
    closePopup(e, signInPopup);
});

closeLogIn.addEventListener('click', (e) => {
    closePopup(e, logInPopup);
});

// Закрытие модального окна при нажатии на область вне окна

signInPopup.addEventListener('click', (e) => {
    if (e.target === signInPopup) {
        closePopup(e, signInPopup);
    }
});

logInPopup.addEventListener('click', (e) => {
    if (e.target === logInPopup) {
        closePopup(e, logInPopup);
    }
});

// Анимация модальных окон при 375px
// Открытие бургер-меню

const headerPopup = document.querySelector('.header__popup'),
      burger = document.querySelector('.header__burger'),
      closeBurger = document.querySelector('.header__popup .popup__close'),
      headerLogin = document.querySelector('.header__popup .header__login'),
      headerSignin = document.querySelector('.header__popup .header__signin');


function openPopupMini(e, popup) {
    e.preventDefault();
    popup.classList.remove('header__popupClose');
    popup.classList.add('header__popupShow');
}

burger.addEventListener('click', (e) => {
    e.preventDefault();
    headerPopup.classList.remove('header__popupClose');
    headerPopup.classList.add('header__popupShow');
});

closeBurger.addEventListener('click', (e) => {
    e.preventDefault();
    headerPopup.classList.add('header__popupClose');
    headerPopup.classList.remove('header__popupShow');
});

// Открытие модальных окон при 375px

headerLogin.addEventListener('click', (e) => {
    openPopup(e, signInPopup);
});

headerSignin.addEventListener('click', (e) => {
    openPopup(e, logInPopup);
});