"use strict";

const menus = document.querySelectorAll(".tab__el a");
const content = document.querySelectorAll(".tab__content");

if(menus){
    for(let menu of menus){
    menu.addEventListener("click", show);
    }
}
 
function show(event){
    //event.preventDefault()

    const parenttab = event.currentTarget.closest(".tab");

    const supp = parenttab.querySelector(".tab__el--active");
    supp.classList.remove("tab__el--active");
    event.currentTarget.parentNode.classList.add("tab__el--active");
    
    const tabactive = parenttab.querySelector(".tab__content--active");
    tabactive.classList.remove("tab__content--active");
    
    const tabselectid = event.currentTarget.getAttribute("href");
    const tabselct = parenttab.querySelector(tabselectid);
    tabselct.classList.add("tab__content--active");

}