# Hangman game

### Overview
The theme of this game is Classical music. In the this hangman game, you get to guess the composer of the classical music. When you guess it right will hear a piece composed by that musician and see his picture.

###Demo
[Click to watch the demo](https://thawing-shore-39948.herokuapp.com)

### Technologies used
* HTML
* CSS
* Javascript. 

### Design used
* Storing data as objects

### Challenged faced
* How to display the word as blanks?
* How to let users to enter only letters?

### Solutions found
* Used slice and fill methods on Array.prototype.
* Using regular expression and testing the user input for it solved the problem. 

### How it works
1. It randomly picks a composer to guess from available set of composers and  displays it like this when the game starts:      `_ _ _ _ _ _ _`.

2. The user guesses the letters present in that word. 

3. When the user guesses correctly, that letter shows.

4. The user has 20 chances to guess the whole word.

5. If the runs out of the chances, he loses. If he guesses the whole word before he runs out of chances, he wins.

6. After the user wins/loses, the game automatically chooses another composer to let the user play the game again.

7. It also keeps track of wins and losses of the games played.

8. When the user guesses the composer correctly, it also plays a song composed by that composer and also displays the picture of the composer.

### Hints for testing

Available composers: Beethoven, Handel, Haydn, Mozart, Brahms

##### Developed by Bhagya

