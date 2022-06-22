"use strict";

// // разворот карт при клике
// function toggleCards() {
//     let cards = document.querySelectorAll(".idc-pluses .swiper-slide");
//     cards.forEach(function (card) {
//         card.addEventListener("click", () => {
//             card.classList.toggle("open");
//             console.log("click");
//         });
//     });
// }

// // разворот только первой карты
// function toggleFirst() {
//     let firstCard = document.querySelector(".idc-pluses .swiper-slide");
//     firstCard.classList.add("open");
//     let remove = setTimeout(function () {
//         firstCard.classList.remove("open");
//     }, 1000);
// }
// let pluses = document.querySelector(".idc-pluses");
// let isOpen = false;

// var DocWidth = document.documentElement.clientWidth;

// document.onreadystatechange = function () {
//     window.addEventListener("resize", function () {
//         banner_resize();
//     });

//     banner_resize();
// };

// window.onload = function () {
//     if (DocWidth < 1020) toggleCards();
// };
// window.onscroll = function () {
//     var position = pluses.getBoundingClientRect().top;

//     if (position < 200 && !isOpen) {
//         toggleFirst();
//         isOpen = true;
//     }
// };
