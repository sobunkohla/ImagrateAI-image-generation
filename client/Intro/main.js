var currentIndex = 0;
var testimonials = 
document.getElementsByClassName("testimonial");


function showNextTestimonial() {
testimonials[currentIndex].classList.add("fade-out");
setTimeout(() => {
    testimonials[currentIndex].style.display =
    "none";
    testimonials[currentIndex].classList.remove("fade-out");
    currentIndex = (currentIndex + 1) % 
    testimonials.length;
    testimonials[currentIndex].style.display = "block";

    testimonials[currentIndex].classList.add("fade-in")
}, 500);


}

function showPreviousTestimonial() {
    testimonials[currentIndex].classList.add("fade-out");
    setTimeout(() => {
        testimonials[currentIndex].style.display = "none";
        testimonials[currentIndex].classList.remove("fade-out");
        currentIndex = (currentIndex - 1 + testimonials.length) %
        testimonials.length;
        testimonials[currentIndex].style.display = "block";
        testimonials[currentIndex].classList.add("fade-in");

    }, 500);
   

}





function openMenu() {
    document.body.classList +=" open-menu";
}
function CloseMenu() {
    document.body.classList.remove("open-menu");
}