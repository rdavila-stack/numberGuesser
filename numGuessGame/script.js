let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
	return Math.floor(Math.random()* 9);
};


function compareGuesses(humanGuess, computerGuess, secretTarget){
	if(Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess -secretTarget)){
		return true;
	} else {
		return false; 
	}
};

const updateScore = (roundWinner) => {
	if (compareGuesses(true)) {
		roundWinner = 'human';
		humanScore++;
	} else {
		roundWinner = 'computer'
		computerScore++;
	}
};

const advanceRound = () =>{
	currentRoundNumber++;
};