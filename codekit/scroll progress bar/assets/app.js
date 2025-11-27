"use strict";

const progressbar = document.querySelector(".scrollbar__progress");

if(progressbar){
    window.addEventListener("scroll", updatescrollprogress);
}

function updatescrollprogress(){
    
    const maxscroll = document.body.scrollHeight - window.innerHeight;
    const currentscroll = window.scrollY;
    const readpourcentage = (currentscroll / maxscroll)* 100;        /* mon pourcentage de scroll */

    progressbar.style.setProperty("--scrollbar-width",readpourcentage + "%");
}