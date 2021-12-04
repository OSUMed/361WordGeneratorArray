const express = require("express");
var randomWord = require("random-word-by-length"); // We use this NPM package which stores a number of common english words

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5152;

// Function we call which generates the actual random word and then returns it
function randomWordList(numb) {
  return randomWord(numb);
}

// Main service that supplies the get request: The words amount and length are the keys and the values can be chosen by the user: the number of words or the words length needed:
app.get("/amount/:numberOfWords/length/:wordsLength", function (req, res) {
  let words = [];

  // Changes the data type of the string paramater request so our forloop can create an interation with it:
  let amount;
  amount = Number(req.params.numberOfWords);

  let word;

  // Iterate through the length of amount and one by one generate a user requested length of a word and then push it into our list:
  for (let i = 0; i < amount; i++) {
    word = randomWordList(Number(req.params.wordsLength));
    console.log("The number is: ", word);
    words.push(word);
  }
  console.log(words);

  res.send(words);
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
