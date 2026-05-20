const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");
// an array of images
const cardValues = ["chicken.jpg", "horse.png", "chicken.jpg", "horse.png"];
let  firstCard  = null
let secondCard = null
// looop through my array and display each image in an image tag
cardValues.forEach(function (image){  
 //  created an image tag
let imageContainer = document.createElement("img")
 //gave it a class list 
imageContainer.classList.add("card")
// appended it to the game board so it can display
gameBoard.append(imageContainer)
imageContainer.dataset.image = image;
// every time the image is clicked you can see whats inside
imageContainer.addEventListener("click", (event) => {
    event.preventDefault()
    imageContainer.src = image;
    let clickedCard = event.target;
   if(!firstCard){
       firstCard = clickedCard
    }else(
        secondCard = clickedCard
    )  
     if(firstCard.dataset.image === secondCard.dataset.image){
        messageText.textContent = "You got it 🥳"
     }   
    
})
})