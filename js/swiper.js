const swiper1 = new Swiper(".idc-swiper-1", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 60,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,
    autoHeight: true,

    pagination: {
        el: ".idc-swiper-1 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper-1 .idc-swiper-button-next",
        prevEl: ".idc-swiper-1 .idc-swiper-button-prev",
    },
});

const swiper2 = new Swiper(".idc-swiper-2", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-swiper-2 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
                fill: "row",
                rows: 3,
            },
        },
        1020: {
            slidesPerView: 3,
            spaceBetween: 17,
            grid: {
                fill: "row",
                rows: 2,
            },
        },

        1340: {
            spaceBetween: 10,
        },
    },
});
