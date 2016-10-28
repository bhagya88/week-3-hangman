console.log("hangman 2.0");

//Declare global variables
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
			 musicTitle:"Symphony n.9 Op.125 'Choral' in D minor Adagio"
			},
			{
			 word:"mozart",
			 image:"mozart.jpg",
			 music:"mozart.mp3",
			 musicTitle:"Concerto for violin and orchestra n.3 K.216 in G Allegro"
			},

			{
			 word:"haydn",
			 image:"haydn.jpg",
			 music:"haydn.mp3",
			 musicTitle:"Sonata for piano n.48 H.16"
			},
			{
			 word:"brahms",
			 image:"brahms.jpg",
			 music:"brahms.mp3",
			 musicTitle:"Lullaby"
			},
			{word:"handel",
			image:"handel.jpg",
			music:"handel.mp3",
			musicTitle:"Water Music 01 Overture"
			}];


// resets the game with new word
function reset(){
	//get random Index of deck
	currentWordIndex=Math.floor(Math.random() * deck.length);
	// sets currentword array
	currentWord = deck[currentWordIndex].word.split("");
	// sets guessword array and fills it with '_'
	guessWord = currentWord.slice().fill("_",0,currentWord.length);
	//sets max guesses
	guessesRemaining =20;
	//if the user guess wrong, it goes into the this array
	wrongGuessArr = [];

	// writing to the index.html and console
	document.querySelector("#guessWord").innerHTML = guessWord.join(" ");
	document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
	console.log("currentWord = " + currentWord.join(" "));
	console.log("guessWord = " + guessWord.join(" "));

}

// prints wins, loses, guessed remaining, word, wrong guesses on the indexs.html
function printStats(){
	
	// writing to the index.html and console
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

// after the uses guess the word (composer) correctly, it play the music by that composer in the background
function updateImgMusic(){
	
	document.querySelector("#imgClue").setAttribute("src","assets/images/"+deck[currentWordIndex].image);
	document.querySelector("#audioClue").setAttribute("src","assets/music/"+deck[currentWordIndex].music);
	document.querySelector("#audioClue").play();
	currentWord[0]=currentWord[0].toUpperCase();
	document.querySelector("#composer").innerHTML = "Playing "+deck[currentWordIndex].musicTitle+" by " + currentWord.join("");
}

// lets user to enter only characters
function isAlfa(userGuess) {
    return /^[a-zA-Z]/.test(userGuess);
}




document.addEventListener("DOMContentLoaded",function(){

	// runs reset which gives a new word 
	reset();
	document.onkeyup = function(event){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// if the userGuess is a character then proceeds
		if(isAlfa(userGuess)){

			// check if userGuess is present in the word
			var pos = currentWord.indexOf(userGuess);

			//decrement guesses
			guessesRemaining--;

			console.log("userGuess = "+userGuess);
			
			// if userGuess is present in the word and guesses are still remaining and userGuess is not present in guess word already
			if( pos !== -1 && guessWord.indexOf(userGuess) === -1 && guessesRemaining >=0 ){


				// populate guess word with letter at right places
				while (pos !== -1 ) {
						 
						guessWord[pos] = currentWord[pos];
					 	pos = currentWord.indexOf(userGuess, pos + 1);
				}

				console.log("guessWord = "+guessWord.join(" "));

				// checks if win happens before guesses run out
				if (currentWord.join(',') === guessWord.join(',') && guessesRemaining >= 0 ){
					wins++;
					updateImgMusic();
					console.log("Good Job!")

					console.log("img ")
					reset();

				}

			}
			// if userGuess is not present in word then push the guess to wrong guess array
			else if(pos === -1 && wrongGuessArr.indexOf(userGuess) === -1){
					wrongGuessArr.push(userGuess);
			}

			// check if  a loss occured
			if(guessesRemaining === 0 && currentWord.join(',') !== guessWord.join(',')){
					loses++;
					console.log("Try another word!")
					reset();
				
			
				
			}
			//prints all the stats
			printStats();
		}
	}
	
});





