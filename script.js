// Countdown Timer (24 Hours)

let endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

function updateTimer() {

let now = new Date().getTime();

let distance = endTime - now;

let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance % (1000*60*60))/(1000*60));

let seconds = Math.floor((distance % (1000*60))/1000);

let timer = document.getElementById("timer");

if(timer){

timer.innerHTML =

hours + "h " +

minutes + "m " +

seconds + "s";

}

}

setInterval(updateTimer,1000);

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Reveal Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card").forEach(el=>{

observer.observe(el);

});
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide(){
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide(){
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto Slide every 3 seconds
setInterval(nextSlide, 3000);
