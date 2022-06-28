"use strict";

// разворот карт при клике
function toggleCards() {
    let cards = document.querySelectorAll(".idc-gallery .swiper-slide");
    cards.forEach(function (card) {
        card.addEventListener("click", () => {
            card.classList.toggle("open");
            // console.log("click");
        });
    });
}

// разворот только первой карты
function toggleFirst() {
    let firstCard = document.querySelector(".idc-gallery .swiper-slide");
    firstCard.classList.add("open");
    let remove = setTimeout(function () {
        firstCard.classList.remove("open");
    }, 1000);
}
let gallery = document.querySelector(".idc-gallery");
let isOpen = false;

var DocWidth = document.documentElement.clientWidth;

window.onload = function () {
    if (DocWidth < 1020) toggleCards();
};
window.onscroll = function () {
    var position = gallery.getBoundingClientRect().top;

    if (position < 400 && !isOpen) {
        toggleFirst();
        isOpen = true;
    }
};

// желтый цвет округа при клике

document.onreadystatechange = function () {
    var DocWidth = document.documentElement.clientWidth;
    if (DocWidth < 1020) {
        // console.log(true);
        // желтый цвет округа при клике
        let regions = document.querySelectorAll(".idc-map .idc-path");
        for (let region of regions) {
            // region.addEventListener("mouseover", function () {
            //     console.log("hover");
            //     region.classList.add("hover");
            // });
            // region.addEventListener("mouseout", function () {
            //     region.classList.remove("hover");
            // });
            region.addEventListener("click", function (e) {
                let target = e.target;
                if (region)
                    if (document.querySelector(".idc-map .idc-path.clicked")) {
                        document
                            .querySelector(".idc-map .idc-path.clicked")
                            .classList.remove("clicked");
                        region.classList.add("clicked");
                    } else {
                        region.classList.add("clicked");
                    }
            });
        }
    }
};

// // убираем цвет округа при клике в любом месте окна браузера
// window.addEventListener("click", (e) => {
//     // при клике в любом месте окна браузера
//     let regions = document.querySelectorAll(".idc-map .idc-path");
//     for (let region of regions) {
//         const target = e.target; // находим элемент, на котором был клик
//         if (
//             !target.closest(".idc-map .idc-path") &&
//             !target.closest(".idc-map .idc-path.clicked")
//         ) {
//             region.classList.remove("clicked");
//         }
//     }
// });

// клие по городам
let dots = document.querySelectorAll(".idc-dot");
for (let dot of dots) {
    let regionNumber = dot.getAttribute("data-region");
    let region = document.querySelector(
        '.idc-map .idc-path[data-region="' + regionNumber + '"]'
    );
    dot.addEventListener("mouseover", function () {
        // console.log("hover");
        region.classList.add("hover");
    });
    dot.addEventListener("mouseout", function () {
        region.classList.remove("hover");
    });
    dot.addEventListener("click", function (e) {
        e.preventDefault();
        // let target = e.target;
        // console.log(region);
        if (
            document.querySelector(".idc-dot.clicked") &&
            document.querySelector(".idc-path.clicked")
        ) {
            document
                .querySelector(".idc-path.clicked")
                .classList.remove("clicked");
            document
                .querySelector(".idc-dot.clicked")
                .classList.remove("clicked");
            dot.classList.add("clicked");
            region.classList.add("clicked");
        } else {
            dot.classList.add("clicked");
            region.classList.add("clicked");
        }
    });
}
