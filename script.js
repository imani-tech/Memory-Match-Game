const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");
// an array of images
const cardValues = ["chicken.jpg", "horse.png", "chicken.jpg", "horse.png"];
// looop through my array and display each image in an image tag
cardValues.forEach(function (image){  
 //  created an image tag
let imageContainer = document.createElement("img")
 //gave it a class list 
imageContainer.classList.add("card")
// appended it to the game board so it can display
gameBoard.append(imageContainer)
// every time the image is clicked you can see whats inside
let  firstCard  = null
let secondCard = null
imageContainer.addEventListener("click", (event) => {
    imageContainer.src = image;
   if(!firstCard){
       firstCard = event.target.src
    }else(
        secondCard = event.target.src
    )  
     
    console.log(firstCard)
    console.log(secondCard)
    
    
})
})