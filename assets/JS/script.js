function slider(nav, block, shift) {
    let btn = document.querySelectorAll(nav);
    let blk = document.querySelector(block);

    function removing(btn) {
        btn.forEach(function(item) {
            item.classList.remove('active');})
        }

        for (let i=0; i<btn.length;i++) {
            btn[i].addEventListener('click', function() {
                removing(btn);
                blk.style.left = i*(shift) + 'px';
                btn[i].classList.add('active');
            }) 
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
