const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");
// an array of images
const cardValues = ["chicken.jpg", "horse.png", "chicken.jpg", "horse.png", "cat photo.jpg", "dog photo.jpg", "cat photo.jpg", "dog photo.jpg"];
// declared variables that will store the clicked image
let  firstCard  = null;
let secondCard = null;
let lockBoard = false;
let hideImage = false
let moves = 0;
let selectedCards = []; 

// keeps truck of the selected equal images
let SELECTED_IMG_EQUAL = [];
// looop through my array and display each image in an image tag
cardValues.forEach(function (image){  
    //  created an image tag
    let imageContainer = document.createElement("img");
    //gave it a class list 
    imageContainer.classList.add("card");
    // appended it to the game board so it can display
    gameBoard.append(imageContainer);
    // stores some information on the HTML element.
    imageContainer.dataset.image = image;
    imageContainer.src = "download (4).jpg" ;
// **********************Event listener***************

// every time the image is clicked you can see whats inside
imageContainer.addEventListener("click", function imagdisplay(event) {
    // prevented the page from loading after you click it
    event.preventDefault();   
    // It stops the user clicking when it is true 
    if(lockBoard){
        return
    } ;       
    // tells me the exact image clicked 
    let clickedCard = event.target;
    // makes sure no clicking the same image
    if (clickedCard === firstCard){
        return
    } ;
    // shows the image when clicked 
    clickedCard.src = clickedCard.dataset.image;        
    // validates the cards clicked
    if(!firstCard){
        firstCard = clickedCard;
        // after the first card is selcted its stored in selectedCards array
        selectedCards.push(firstCard);
        return;
    }else if(!secondCard){
        secondCard = clickedCard;
        // after the second card is selcted its stored in selectedCards array
        selectedCards.push(secondCard);
        // stoped the image from showing when clicking
        lockBoard = true;        
    }; 
   
// makes sure to count moves after 2 images are selected
    if(selectedCards.length >= 2){
        moves++;
        movesText.textContent = moves ;      
    } ;
    
    // validates if the two images selected are equal
    if(firstCard && secondCard){
    if(firstCard.dataset.image === secondCard.dataset.image){
        messageText.textContent = "You got it 🥳";
        // keeps truck of the selected equal images
        SELECTED_IMG_EQUAL.push(firstCard, secondCard);
         // to aviod already selected images to be clicked again
        firstCard.classList.add("open-image-locker"); 
        secondCard.classList.add("open-image-locker");             
    } else{
        messageText.textContent = "Image didn't match 😔";  
        SELECTED_IMG_EQUAL = [];      
        }
      
    //   after the first two images are selected enable selection of the rest  
        if(SELECTED_IMG_EQUAL.length === 8){ 
            messageText.textContent = "congrats🎉 you found them all🎊👏";
            SELECTED_IMG_EQUAL = []
            firstCard = null;
            secondCard = null
        }else{  
            if(SELECTED_IMG_EQUAL.length >= 2){          
            setTimeout(() => {
            messageText.textContent = "Find the next one 😉👍";
            firstCard = null;
            secondCard = null; 
            lockBoard = false;  
            console.log(SELECTED_IMG_EQUAL)            
             return;     
        }, 1500);   
    }                
        
        
        if(firstCard.dataset.image !== secondCard.dataset.image){
            setTimeout(() => {
                messageText.textContent = "Please try again👍" ; 
                firstCard.src = "download (4).jpg";
                secondCard.src = "download (4).jpg";  
                firstCard = null;
                secondCard = null;                  
                lockBoard = false;
                
            }, 1500)
        }; 
        };   
    }   
})   
})
resetBtn.addEventListener("click", () => {
    
})