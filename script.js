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

function openLightbox(index){

    current=index;

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=images[current];

}

function closeLightbox(){

    document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

    current+=step;

    if(current<0){

        current=images.length-1;

    }

    if(current>=images.length){

        current=0;

    }

    document.getElementById("lightbox-img").src=images[current];

}

function filterImages(category,button){

    const items=document.querySelectorAll(".image");

    items.forEach(item=>{

        if(category==="all" || item.classList.contains(category)){

            item.style.display="block";

        }

        else{

            item.style.display="none";

        }

    });

    const buttons=document.querySelectorAll(".filters button");

    buttons.forEach(btn=>{

        btn.classList.remove("active");

    });

    button.classList.add("active");

}