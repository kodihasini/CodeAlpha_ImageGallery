// ==============================
// IMAGE ARRAY
// ==============================

const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png",
    "images/img7.png",
    "images/img8.png"
];

let current = 0;

// ==============================
// OPEN LIGHTBOX
// ==============================

function openLightbox(index){

    current = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = images[current];

}

// ==============================
// CLOSE LIGHTBOX
// ==============================

function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";

}

// ==============================
// NEXT / PREVIOUS IMAGE
// ==============================

function changeImage(step){

    current += step;

    if(current < 0){

        current = images.length - 1;

    }

    if(current >= images.length){

        current = 0;

    }

    document.getElementById("lightbox-img").src = images[current];

}

// ==============================
// FILTER IMAGES
// ==============================

function filterImages(category,button){

    const cards = document.querySelectorAll(".image");

    cards.forEach(card=>{

        if(category==="all" || card.classList.contains(category)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

    document.querySelectorAll(".filters button").forEach(btn=>{

        btn.classList.remove("active");

    });

    button.classList.add("active");

}

// ==============================
// SEARCH
// ==============================

function searchImages(){

    let search = document
    .getElementById("search")
    .value
    .toLowerCase();

    let cards = document.querySelectorAll(".image");

    cards.forEach(card=>{

        let title = card
        .querySelector(".title")
        .innerText
        .toLowerCase();

        if(title.includes(search)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// ==============================
// KEYBOARD CONTROLS
// ==============================

document.addEventListener("keydown",function(e){

    if(document.getElementById("lightbox").style.display==="flex"){

        if(e.key==="ArrowRight"){

            changeImage(1);

        }

        if(e.key==="ArrowLeft"){

            changeImage(-1);

        }

        if(e.key==="Escape"){

            closeLightbox();

        }

    }

});

// ==============================
// CLOSE LIGHTBOX WHEN CLICKING
// OUTSIDE IMAGE
// ==============================

const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        closeLightbox();

    }

});

// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

// ==============================
// SCROLL TO TOP
// ==============================

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ==============================
// CARD FADE-IN ANIMATION
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".image").forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".7s";

    observer.observe(card);

});

// ==============================
// PRELOAD IMAGES
// ==============================

images.forEach(src=>{

    const img = new Image();

    img.src = src;

});

// ==============================
// HERO TITLE ANIMATION
// ==============================

const heroTitle = document.querySelector(".hero h1");

heroTitle.animate(

[
    {

        opacity:0,

        transform:"translateY(-40px)"

    },

    {

        opacity:1,

        transform:"translateY(0)"

    }

],

{

    duration:1200,

    easing:"ease-out"

}

);

// ==============================
// HERO BUTTON ANIMATION
// ==============================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("mouseenter",function(){

    heroButton.style.transform="scale(1.08)";

});

heroButton.addEventListener("mouseleave",function(){

    heroButton.style.transform="scale(1)";

});

// ==============================
// IMAGE HOVER EFFECT
// ==============================

const galleryImages=document.querySelectorAll(".image");

galleryImages.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".4s";

    });

});

// ==============================
// PAGE LOADED
// ==============================

window.onload=function(){

    console.log("Modern Image Gallery Loaded Successfully!");

};