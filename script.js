const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");
// an array of images
const cardValues = ["chicken.jpg", "horse.png", "chicken.jpg", "horse.png"];
// declared variables that will store the clicked image
let  firstCard  = null
let secondCard = null
let lockBoard = false;
// looop through my array and display each image in an image tag
cardValues.forEach(function (image){  
 //  created an image tag
let imageContainer = document.createElement("img")
 //gave it a class list 
imageContainer.classList.add("card")
// appended it to the game board so it can display
gameBoard.append(imageContainer)
imageContainer.dataset.image = image;

// **********************Event listener***************

// every time the image is clicked you can see whats inside
imageContainer.addEventListener("click", function imagdisplay(event) {
    // prevented the page from loading after you click it
    event.preventDefault()   
    // It stops the user clicking when it is true 
    if(lockBoard){
        return
    }       
    // tells me the exact image clicked 
    let clickedCard = event.target;
    // makes sure no clicking the same image
    if (clickedCard === firstCard){
        return
    } 
    // shows the image when clicked 
    clickedCard.src = clickedCard.dataset.image; 
         
    // validates the cards clicked
  if(!firstCard){
    firstCard = clickedCard;
    return
}else if(!secondCard){
    secondCard = clickedCard;
    // stoped the image from showing when clicking
    lockBoard = true;
}else{
    return
}
    if(firstCard && secondCard){

    if(firstCard.dataset.image === secondCard.dataset.image){
        messageText.textContent = "You got it 🥳"
        
    }else{
        messageText.textContent = "image didn't match 😔"                  
    }
    firstCard = null
    secondCard = null

}
})
})
lockBoard = false;

