document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav ul li a, .cta').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// JavaScript for Moving the Circular Image
const image = document.querySelector('.custom-image');
let direction = 1; // 1 for right, -1 for left
let position = 0; // Starting position
const speed = 2; // Speed of movement in pixels per frame

function moveImage() {
    const maxPosition = window.innerWidth - image.offsetWidth; // Maximum position based on screen width

    position += direction * speed;

    // Reverse direction if it hits the screen bounds
    if (position <= 0 || position >= maxPosition) {
        direction *= -1;
    }

    // Update the image position
    image.style.transform = `translateX(${position}px)`;

    // Repeat the movement
    requestAnimationFrame(moveImage);
}

// Start the movement
moveImage();
// JavaScript for image slider
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function slideImages() {
    // Remove 'active' class from current image
    images[currentIndex].classList.remove('active');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the next image
    images[currentIndex].classList.add('active');
}

// Initialize the first image as active
images[currentIndex].classList.add('active');

// Set interval to slide images every 3 seconds
setInterval(slideImages, 3000);
