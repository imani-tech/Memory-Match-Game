# JavaScript Challenge: Memory Match Game

Build a small **Memory Match Game** using HTML, CSS and vanilla JavaScript.

The game should show a grid of hidden cards. The user clicks two cards at a time and tries to find matching pairs.

The focus of this challenge is practising DOM events, arrays, conditions, functions, game state and rendering.

---

## Task

Complete the JavaScript inside `script.js`.

I have made the HTML and CSS for you. You can improve the styling if you want, but the main focus should be the JS logic.

---

## Requirements

A player should be able to:

1. Start with a grid of hidden cards
2. Click a card to reveal it
3. Click a second card to reveal it
4. Check if the two cards match
5. Keep matching cards visible
6. Hide cards again if they do not match
7. Count the number of moves
8. Show a message when all pairs are matched
9. Restart the game with a reset button
10. Shuffle the cards when the game starts

---

## Card data

The game should use an array of card values.
(They can be anything, emojis, images etc..)

Example in the JS:

```js
const cardValues = ["X", "B", "A", "G", "X", "B", "A", "G"];
