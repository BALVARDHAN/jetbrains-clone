const carousel = document.querySelector(".carousel");
const left_arrow = document.querySelectorAll(".carousel-navigator-btn")[0];
const right_arrow = document.querySelectorAll(".carousel-navigator-btn")[1];
const slide_number = document.querySelector(".carousel-count");
var count = 1;
carousel.style.left = 0;
var going_back = false;
left_arrow.style.opacity = "0.7"

var move_backward = function(){
    carousel.style.left = parseInt(carousel.style.left) + 100 + "%";
    count--;
    slide_number.innerHTML = `${count}/3`
    if(count == 1){
        left_arrow.style.opacity = "0.7";
        right_arrow.style.opacity = "1";
    }
    else{
        left_arrow.style.opacity = "1";
        right_arrow.style.opacity = "1";
        
    }
}

var move_forward = function(){
    carousel.style.left = parseInt(carousel.style.left) - 100 + "%";
    count++;
    slide_number.innerHTML = `${count}/3`
    if(count == 3){
        right_arrow.style.opacity = "0.7";
        left_arrow.style.opacity = "1";
    }
    else{
        right_arrow.style.opacity = "1";
        left_arrow.style.opacity = "1";
    }
}

var sliding = setInterval(() => {
    if(count < 3){
        if(going_back && count!==1){
            move_backward();
        }
        else{
            going_back = false;
            move_forward();
        }
    }
    else{
        going_back = true;
        move_backward();
    }
}, 4000);

right_arrow.addEventListener("click",()=>{
    if(!(count == 3)){
        clearInterval(sliding);
        move_forward();
    }
});

left_arrow.addEventListener("click",()=>{
    if(!(count == 1)){
        clearInterval(sliding);
        move_backward();
    };
});