const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");
// an array of images
const cardValues = ["chicken.jpg", "horse.png", "chicken.jpg", "horse.png"];
// looop through my array and display each image in an image tag
cardValues.forEach(function (image){       
let imageContainer = document.createElement("img")
imageContainer.classList.add("card")
gameBoard.append(imageContainer)
imageContainer.addEventListener("click", (event) => {
    imageContainer.src = image;
})
})