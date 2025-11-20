"use strict";

const body = document.querySelector("body");
const menutoggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const els = document.querySelectorAll(".menu__el a");

if(menutoggle){
    menutoggle.addEventListener("click", menuOpen);
    for (let el of els){
        el.addEventListener("click", menuOpen);
    }
}
function menuOpen(){
    menu.classList.toggle("menu--open");
    body.classList.toggle("no-scroll");
}
