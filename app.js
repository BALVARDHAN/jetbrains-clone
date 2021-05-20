const carousel_slider = document.querySelector(".carousel-slider");
const left_arrow = document.querySelector(".left-arrow-btn");
const right_arrow = document.querySelector(".right-arrow-btn");
const carousel_index = document.querySelector(".carousel-index");
var count = 1
carousel_slider.style.left = "0px";

left_arrow.style.opacity = "0.7";

right_arrow.addEventListener("click",()=>{
    if(count < 3){
        right_arrow.style.opacity = "1";
        left_arrow.style.opacity = "1";
        carousel_slider.style.left = parseInt(carousel_slider.style.left) -100 + "%";
        count++;
        if(count == 3){
            right_arrow.style.opacity = "0.7";
        }
    }
})

left_arrow.addEventListener("click",()=>{
    if(count > 1){
        left_arrow.style.opacity = "1";
        right_arrow.style.opacity = "1";
        carousel_slider.style.left = parseInt(carousel_slider.style.left) +100 + "%";
        count--;
        if(count ==1){
            left_arrow.style.opacity = "0.7";
        }
    }
})