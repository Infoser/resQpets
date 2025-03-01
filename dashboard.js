// Array of random pet images
const petImages = [
    "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg",
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    "https://images.pexels.com/photos/1573018/pexels-photo-1573018.jpeg",
    "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
];

// Function to change background image every 5 seconds
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * petImages.length);
    document.querySelector(".dashboard").style.backgroundImage = `url(${petImages[randomIndex]})`;
}

// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();
