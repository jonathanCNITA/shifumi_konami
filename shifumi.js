/*
 * This is the shifumi engine 
 * Original file week02/exo3/script.js
 *
 *
*/

var validWords = ['rock', 'paper', 'scissors', 'bomb', 'pierre', 'papier', 'ciseau'];

function getUserChoice( userInput ) {
	userInput = userInput.toLowerCase();
	if (validWords.includes(userInput)) {
		console.log(userInput);
		return userInput;
	} else {
		console.log(`${userInput} is not a valid choice`);
	}
}


function getComputerChoice() {
	var computerNumber = Math.floor(Math.random() * 3);
	if (computerNumber === 0) {
		return 'rock';
	} else if (computerNumber === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function determineWinner( userChoice, computerChoice ) {
	if (userChoice === 'bomb') {
		return 'You Win';
	} 

	if (userChoice === computerChoice) {
		return 'Tied';
	} else {
		if (userChoice === 'rock') {
			if ( computerChoice === 'scissors') {
				return 'You Win';
			} else {
				return 'You loose';
			}
		} else if (userChoice === 'paper') {
			if (computerChoice === 'rock') {
				return 'You Win';
			} else {
				return 'You loose';
			}
		} else if (userChoice === 'scissors') {
			if (computerChoice === 'paper') {
				return 'You Win';
			} else {
				return 'You loose';
			}
		}
	}
}


function playGame() {
	var uChoice = getUserChoice('rock');
	var computerChoice = getComputerChoice();

	console.log(`user played : ${uChoice}`);
	console.log(`computer played : ${computerChoice}`);
	console.log(determineWinner(uChoice, computerChoice));
}

// Uncomment to play in the console
// playGame();