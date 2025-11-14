"use strict";

const backtotop = document.querySelector(".backtotop");

if(backtotop){
    window.addEventListener("scroll", showbacktotop);
}

function showbacktotop(){
    const currentscroll = window.scrollY;
    console.log(currentscroll)
    if(currentscroll > 300){
        backtotop.classList.add("backtotop--show")
    }else {
        backtotop.classList.remove("backtotop--show")
    }
}