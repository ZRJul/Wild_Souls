// way_section, concept_section and treasures_section for photo

$(function () {
    let count = 1;
    let click = true;
    let num = $(".slide_photo").length;
    $(".slide_photo").click(function () {
        if (!click) {
            return;
        }
        click = false;
        let card = $(this);
        if (count < num) {
            $(this).addClass("bottom");
            count++;
        } else {
            $(this).addClass("bottom_last");
            count++;
        }
        if (count == num + 1) {
            setTimeout(function () {
                $(".slide_photo").removeClass("bottom").removeClass("bottom_last");
                count = 1;
            }, 1000);
        }
        setTimeout(function () {
            click = true;
        }, 1000);
    });
});



// header_burger
$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header_menu a').click(function (event) {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

});



// product_section and footer slider

$(document).ready(function(){
    // Инициализация Slick Slider на каждом элементе
    let productSlider = $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    let footerSlider = $('#footerSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $(window).on('resize', function() {
        let windowWidth = $(window).width();

        // Применение настроек к обоим слайдерам
        if (windowWidth <= 767) {
            productSlider.slick('slickSetOption', 'slidesToShow', 1, true);
            footerSlider.slick('slickSetOption', 'slidesToShow', 1, true);
        } else if (windowWidth <= 1100) {
            productSlider.slick('slickSetOption', 'slidesToShow', 2, true);
            footerSlider.slick('slickSetOption', 'slidesToShow', 2, true);
        } else {
            productSlider.slick('slickSetOption', 'slidesToShow', 3, true);
            footerSlider.slick('slickSetOption', 'slidesToShow', 3, true);
        }

        // Пауза и запуск автопрокрутки
        if (productSlider.slick('slickGetOption', 'autoplay')) {
            productSlider.slick('slickPause');
            productSlider.slick('slickPlay');
        }

        if (footerSlider.slick('slickGetOption', 'autoplay')) {
            footerSlider.slick('slickPause');
            footerSlider.slick('slickPlay');
        }
    });

    // Инициализация обработчика события при загрузке страницы
    $(window).trigger('resize');
});
//..................................................














//main_section form placeholder
document.addEventListener("DOMContentLoaded", function() {
    let myInput = document.getElementById("cookies");
    let myForm = document.getElementById("cookies_form");

    // Обработчик события клика по форме
    myForm.addEventListener("click", function() {
        // Скрыть placeholder
        myInput.placeholder = "";
    });

    // Обработчик события потери фокуса поля ввода
    myInput.addEventListener("blur", function() {
        // Восстановить placeholder, если поле ввода пусто
        if (myInput.value === "") {
            myInput.placeholder = "Our Website use    cookies";
        }
    });
});
//..................................................
