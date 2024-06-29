$(document).ready(function () {

    let swiper = new Swiper(".reviews_swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".reviews_swiper--next",
            prevEl: ".reviews_swiper--prev",
        },
        pagination: {
            el: ".reviews_swiper--pagination",
        },
        mousewheel: true,
        keyboard: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            1110: {
                slidesPerView: 2,
            },
        },
    });

    let rangeDaysInput = $("#days");
    let rangePriceInput = $("#price");
    let daysInput = $(".daysInput");
    let priceInput = $(".priceInput");
    
    rangeDaysInput.on("input", function() {
        daysInput.val($(this).val());
    });

    daysInput.on("input", function() {
        rangeDaysInput.val($(this).val());
    });

    rangePriceInput.on("input", function() {
        priceInput.val($(this).val());
    });

    priceInput.on("input", function() {
        rangePriceInput.val($(this).val());
    });

    let faqMoreOpenBtn = $(".faq_item--title");
    faqMoreOpenBtn.each(function (btn) {
        $(this).on("click", (e) => {
            $(this).parent().toggleClass("active");
        });
    });

    let toStep01Btn = $(".frststep");
    let toStep02Btn = $(".scndstep");
    let toStep03Btn = $(".thrtstep");
    let skipStepBtn = $(".skipStepBtn");
    let fastCreditTitle = $(".fastcredit_title");

    toStep02Btn.on("click", function (e) {
        e.preventDefault();
        $(".step02").addClass("active");
        $(".step01").removeClass("active");
        $(".step03").removeClass("active");
    });
    toStep01Btn.on("click", function (e) {
        e.preventDefault();
        $(".step01").addClass("active");
        $(".step02").removeClass("active");
        $(".step03").removeClass("active");
    });
    toStep03Btn.on("click", function (e) {
        e.preventDefault();
        $(".step03").addClass("active");
        $(".step02").removeClass("active");
    });
    skipStepBtn.on("click", function (e) {
        e.preventDefault();
        $(".step04").addClass("active");
        $(".step03").removeClass("active");
        fastCreditTitle.addClass("active");
    });


});