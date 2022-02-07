const { update } = require("lodash");

// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){

}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = this.textContent;
  const generateCPUResponse = document.getElementsByName (generateCPUResponse);
  welcomeScreen.classList.remove(`d-none`);
  gameScreen.classList.add(`d-none`);
  game = new RockPaperScissors(userName);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const userSelection = this.textContent;
  Play(userSelection);
  update(updateScoreTallyUI());
  update(updateGameHistoryUI());
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });