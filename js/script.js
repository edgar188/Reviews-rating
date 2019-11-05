"use strict";

function responsiveNavbar() {
    var navList = document.getElementById("nav_list");

    if (navList.className === "nav_list") {
        navList.className += " responsive"
    } 
    else {
        navList.className = "nav_list";
    }
}

const introSlideData = [
    {
        topText: "Reviews Ratings Comparisons",
        bottomText: "Unbiased Reviews That Save You Time and Money",
        picture: "vector.png"
    },
    {
        topText: "Top text 2",
        bottomText: "Bottom text 2",
        picture: "capture.jpg"
    },
    {
        topText: "Top text 3",
        bottomText: "Bottom text 3",
        picture: "soldier.jpg"
    }
];

function introSlider(target) {
    var topText = document.getElementById("top_text"),
        bottomText = document.getElementById("bottom_text"),
        heroImg = document.getElementById("hero_img"),
        imgSource = heroImg.src.slice(heroImg.src.indexOf("/intro/")),
        currentImg = imgSource.split("/")[2],
        currImgIndex;

    for (var val of introSlideData) {
        if (val.picture === currentImg) {
            currImgIndex = introSlideData.indexOf(val);
            break;
        }
    }

    if(target.id === "next") {
        if(currentImg === introSlideData[introSlideData.length-1].picture) {
            heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[0].picture);
            heroImg.alt = introSlideData[0].picture.split(".")[1];
            topText.innerText = introSlideData[0].topText;
            bottomText.innerText = introSlideData[0].bottomText;
        }
        else {
            heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[currImgIndex + 1].picture);
            heroImg.alt = introSlideData[0].picture.split(".")[1];
            topText.innerText = introSlideData[currImgIndex + 1].topText;
            bottomText.innerText = introSlideData[currImgIndex + 1].bottomText;
        }
    } 
    else {
        if(currentImg === introSlideData[0].picture) {
            heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[introSlideData.length-1].picture);
            heroImg.alt = introSlideData[0].picture.split(".")[1];
            topText.innerText = introSlideData[introSlideData.length-1].topText;
            bottomText.innerText = introSlideData[introSlideData.length-1].bottomText;
        } 
        else {
            heroImg.src = heroImg.src.replace(imgSource, "/intro/" + introSlideData[currImgIndex - 1].picture);
            heroImg.alt = introSlideData[0].picture.split(".")[1];
            topText.innerText = introSlideData[currImgIndex - 1].topText;
            bottomText.innerText = introSlideData[currImgIndex - 1].bottomText;
        }
    }
}





