function show(div) {
    div.classList.add('after-slide');
}


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 0;
let slideIndexCycle = 0;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    /* Проходим по каждому слайду в цикле for: */
    /*     for (let slide of slides) {
            slide.style.display = "none";
        }
     */
    for (let slide of slides) {
        slide.style.order = slides.length;
    }

    for (let i = 0; i < 4; i++) {
        let index = slideIndex;
        if (slideIndex + i >= slides.length) {
            index = (slideIndex + i) - slides.length;
        }
        else {
            index += i;
        }
        /*slides[index].style.display = "block"; */
        slides[index].style.order = i + 1;
    }
}

/* Вызываем функцию, которая реализована ниже: */
showSlidesCycle(slideIndexCycle);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function showSlidesNextCycle() {
    showSlidesCycle(slideIndexCycle += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function showSlidesPreviousCycle() {
    showSlidesCycle(slideIndexCycle -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlidesCycle(slideIndexCycle = n);
}

/* Функция перелистывания: */
function showSlidesCycle(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item-cycle");

    /* Проверяем количество слайдов: */
    if (n >= slides.length) {
        slideIndexCycle = 0;
    }
    if (n < 0) {
        slideIndexCycle = slides.length - 1;
    }

    /* Проходим по каждому слайду в цикле for: */
    /*     for (let slide of slides) {
            slide.style.display = "none";
        }
     */
    for (let slide of slides) {
        slide.style.order = slides.length;
    }

    for (let i = 0; i < 4; i++) {
        let index = slideIndexCycle;
        if (slideIndexCycle + i >= slides.length) {
            index = (slideIndexCycle + i) - slides.length;
        }
        else {
            index += i;
        }
        /*slides[index].style.display = "block"; */
        slides[index].style.order = i + 1;
    }
}

setInterval(showSlidesNextCycle, 3000);

