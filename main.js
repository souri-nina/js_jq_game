// four hangman words for Game array
// computer generates random from array
// allow player to guess letter or hangman word
// allow exit or quit game option 
// player correct guess = game finished

var words = [
  'devpoint',
  'howdy',
  'hangman',
  'gameover'
];

var answer = words[Math.floor(Math.random() * words.length)];

