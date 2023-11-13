const carouselContainer = document.querySelector(".carousel-container");
let currentIndex = 0;

function showSection(index) {
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

showSection(currentIndex);

function nextSection() {
    currentIndex = (currentIndex + 1) % 4; 
    showSection(currentIndex);
}

function prevSection() {
    currentIndex = (currentIndex - 1 + 4) % 4;
    showSection(currentIndex);
}

setInterval(nextSection, 3000); 

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const carouselSlides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;
let isPlaying = true;

function showSlide(n) {
    carouselSlides[currentSlide].style.display = "none";
    currentSlide = (n + carouselSlides.length) % carouselSlides.length;
    carouselSlides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function togglePlayPause() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playPauseBtn.innerText = "Pausar";
        playCarousel();
    } else {
        playPauseBtn.innerText = "Reproduzir";
        pauseCarousel();
    }
}

function playCarousel() {
    slideInterval = setInterval(nextSlide, 3000); 
}

function pauseCarousel() {
    clearInterval(slideInterval);
}

prevBtn.addEventListener("click", () => {
    pauseCarousel();
    prevSlide();
});

nextBtn.addEventListener("click", () => {
    pauseCarousel();
    nextSlide();
});

playPauseBtn.addEventListener("click", togglePlayPause);

playCarousel();

