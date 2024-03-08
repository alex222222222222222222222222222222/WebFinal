console.log("Slide-Show JS Loaded!");

const img1 = document.getElementById("imageOne");
const img2 = document.getElementById("imageTwo");
const img3 = document.getElementById("imageThree");

let currentImage = 1; 
const MAX_IMAGES = 3;
const SS_INTERVAL = 1000; 

function updateSlideshow() {

    currentImage++;
    
    if (currentImage > MAX_IMAGES) {
        currentImage = 1;
    }
    switch (currentImage) {
        case 1:
            img1.classList.remove("hide");
            img2.classList.add("hide");
            img3.classList.add("hide");
            break;
        case 2:
            img1.classList.add("hide");
            img2.classList.remove("hide");
            img3.classList.add("hide");
            break;
        case 3: 
            img1.classList.add("hide");
            img2.classList.add("hide");
            img3.classList.remove("hide");
            break;
        default: 
            
            break;
    }


}
setInterval(updateSlideshow, SS_INTERVAL);