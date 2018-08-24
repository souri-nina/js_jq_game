// four hangman words for Game array
// computer generates random from array
// allow player to guess letter or hangman word
// allow exit or quit game option 
// player correct guess = game finished

var words = [ 'eclair', 'frapps', 'banana', 'shakes'];
var user,
    hangman,
    letter

var playword = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
    for (var i = 0; i < answer.length; i++) {
      answerArray[i] = "_";
    }
    var remLetters = answer.length;

    while (remainingLetters > 0) {
      alert(answerArray.join(" "));

      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      if (guess === null) {
        // Exit the game loop
        break;
      } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
      } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
          }
        }
      }
    }  