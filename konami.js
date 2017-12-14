let konami = {
	superPlayer : false,
	userKeys : [],
	konamiCode : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	indexKonami : -1,
	checkKonami(keyIn) {
		this.indexKonami++;
		if(keyIn.keyCode === this.konamiCode[this.indexKonami]) {
			this.userKeys.push(keyIn.keyCode);
			if(this.userKeys.length === this.konamiCode.length) {
				this.superPlayer = !this.superPlayer;
				this.superPlayer ? console.log('You are in super player mode') : console.log('Go back to normal mode');
				this.reinitKonami();
				return true;
			}
		} else {
			this.reinitKonami();
			return false;
		}
	},
	initKonami() {
		document.addEventListener('keydown', function (k){
    		this.checkKonami(k);
		}, false);
	},
	reinitKonami() {
		this.userKeys = [];
		this.indexKonami = -1;
		return "reinit done";
	},
	getUserKeys() {
		return this.userKeys;
	},
	isSuperPlayer() {
		return this.superPlayer;	
	}
};


/*
In jQuery :
--------------------------------------------------------------------------
$(document).ready(function() {
	let ko = false;
	konami.initKonami();

	$(document).keyup(function(k) {
		ko = konami.isSuperPlayer();
		ko ? $('p:first').text("Know") : $('p:first').text("don't know");
	});
});
--------------------------------------------------------------------------

In JavaScript
--------------------------------------------------------------------------
konami.initKonami();
konami.isSuperPlayer(); // return true if konami done
konami.isSuperPlayer() ? console.log('a great power ....') : console.log('Normal Mode');
--------------------------------------------------------------------------

*/

