console.log("exercice 5 - shifumi");
// SHIFUMI

$(document).ready(function() {
	let nbGames = 0;
	let userScore = 0;
	let computerScore = 0;
	let tiedMatchs = 0;
	let playGame = true;

	// animation on the page
	$('img').fadeTo('fast', 0.6);
	$('img').hover(function() {
	    	$( this ).fadeTo('fast', 1);
		}, function() {
	    	$( this ).fadeTo('fast', 0.6);
	  	}
	);
	

	$('img').click(function() {
		if (playGame) {
			playGame = false;
			nbGames++;
			$('#nbGame').text(`${nbGames}`);
			$('#result').html('<span class="glyphicon glyphicon-time text-muted" aria-hidden="true"></span>');

			let $userValue = $(this).data('value');
			$('#userChoice').html(`<b>Your choice : </b>${ $userValue }`);
			$('#computerChoice').html(`<b>computer choice :</b>`);

			setTimeout(function() {
			    let computerSay = getComputerChoice();
				$('#computerChoice').html(`<b>computer choice :</b> ${ computerSay }`);

				let result = determineWinner($userValue, computerSay);
				$('#result').removeClass().addClass("well h3").css("color","");

				if(superPlayer || result === 'You Win') {
					userScore++;
					$('#result').css("color","green");
					$('#userScore').text(`${ userScore }`);
				} else if (result === 'You loose') {
					computerScore++;
					$('#result').css("color","red");
					$('#computerScore').text(`${ computerScore }`);
				} else {
					tiedMatchs++;
					$('#tiedMatchs').text(`${ tiedMatchs }`);
				}

				if(superPlayer) {
					result = 'You win';
				}

				$('#result').html(`<h2>${ result }</h2>`);
				playGame = true;
			}, 1000);
		}
		
	});

	
	// Konami code
	$(document).keyup(function(k) {
		konami.checkKonami(k);
		superPlayer = konami.isSuperPlayer();
		
	});
});

