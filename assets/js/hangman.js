

console.log("hangman");

var currentWord = [];
var guessWord = [];
var wrongGuessArr = [];

var guessesRemaining =20;
var wins = 0;
var loses = 0;
var curentWordIndex;

var deck = [{
			 word:"beethoven",
			 image:"beethoven.jpg",
			 music:"beethoven.mp3",
			 musicTitle:""
			},
			{
			 word:"mozart",
			 image:"mozart.jpg",
			 music:"mozart.mp3"
			},

			{
			 word:"haydn",
			 image:"haydn.jpg",
			 music:"haydn.mp3"
			},
			{
			 word:"brahms",
			 image:"brahms.jpg",
			 music:"brahms.mp3"
			}];



function reset(){
	
	currentWordIndex=Math.floor(Math.random() * deck.length);
	currentWord = deck[currentWordIndex].word.split("");
	guessWord = currentWord.slice().fill("_",0,currentWord.length);
	guessesRemaining =12;
	wrongGuessArr = [];

	document.querySelector("#guessWord").innerHTML = guessWord.join(" ");
	console.log("currentWord = " + currentWord.join(" "));
	console.log("guessWord = " + guessWord.join(" "));

}

function printStats(){
	
	console.log("wins : "+wins);
	console.log("loses : "+loses);
	console.log("guessesRemaining : "+guessesRemaining);
	console.log("wrong guesses :"+wrongGuessArr.toString());
	document.querySelector("#guessWord").innerHTML = guessWord.join(" ");
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#loses").innerHTML = loses;
	document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
	document.querySelector("#wrongGuesses").innerHTML = wrongGuessArr.join(",");
}

function isAlfa(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded",function(){


	reset();

	document.onkeyup = function(event){

		if(isAlfa(event)){

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();	
			var pos = currentWord.indexOf(userGuess);
			guessesRemaining--;


			console.log("userGuess = "+userGuess);
			
			if( pos !== -1 && guessWord.indexOf(userGuess) === -1 && guessesRemaining >=0 ){
				while (pos !== -1 ) {
						 
						guessWord[pos] = currentWord[pos];
					 	pos = currentWord.indexOf(userGuess, pos + 1);
				}

				console.log("guessWord = "+guessWord.join(" "));


				if (currentWord.join(',') === guessWord.join(',') && guessesRemaining >= 0 ){
					wins++;
					console.log("Good Job!")
					document.querySelector("#imgClue").setAttribute("src","assets/images/"+deck[currentWordIndex].image);
					document.querySelector("#audioClue").setAttribute("src","assets/music/"+deck[currentWordIndex].music);
					document.querySelector("#audioClue").play();
					console.log("img ")
					reset();

				}
			}else if(pos === -1 && wrongGuessArr.indexOf(userGuess) === -1){
					wrongGuessArr.push(userGuess);
			}

			if(guessesRemaining === 0 && currentWord.join(',') !== guessWord.join(',')){
					loses++;
					console.log("Try another word!")
					reset();
				
			
				
			}
			printStats();
		}
	}
	
});




// })();
