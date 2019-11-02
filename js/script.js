"use strict";

const responsiveNavbar = () => {
    const navList = document.getElementById("nav_list");

    if(navList.className === "nav_list") {
        navList.className += " responsive" 
    } 
    else {
        navList.className = "nav_list";
    }
}

