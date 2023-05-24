const carousel = document.querySelector(".carousel");
const firstImg = document.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStrart = false, isDragging = false, prevPageX, prevScrollLeft , positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
   icon.addEventListener("click",() => {
    let firstImgWidth = firstImg.clientWidth + 15;
    carousel.scrollLeft += icon.id == "first-child" ? - firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
   }); 
});


const autoSlide = () => {
   if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return; 
   positionDiff = Math.abs(positionDiff);
   let firstImgWidth = firstImg.clientWidth + 15;
   let valDifference = firstImgWidth - positionDiff;
   if(carousel.scrollLeft > prevScrollLeft){
     return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : - positionDiff;
   }
   carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : - positionDiff
}


const dragStart = (e) => {
    isDragStrart = true;
    prevPageX = e.pageX || e.touches[0].pageX ;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStrart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (prevPageX - (e.pageX || e.touches[0].pageX));
    carousel.scrollLeft = prevScrollLeft + positionDiff;
}

const dragEnd = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
    positionDiff = 0;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragEnd);

carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragEnd);

setInterval(autoSlide, 3000);
window.addEventListener("load", showHideIcons);
window.addEventListener("resize", showHideIcons);
