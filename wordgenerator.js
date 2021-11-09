var randomWord = require("random-word-by-length");
const express = require("express");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5152;

// Backup function to generate a single word
function randomWordList(numb) {
  return randomWord(numb);
}

//Fixed Header error from this code bit from StackOverflow: https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Main service that supplies the get request: The words amount and length are the keys and the values can be chosen by the user: the number of words or the words length needed:
app.get("/amount/:numberOfWords/length/:wordsLength", function (req, res) {
  
  // A list to hold our words. The user will then get this list for them to iterate through:
  let words = [];

  // Changes the string paramater request so our forloop can create an interation with it:
  let amount;
  amount = Number(req.params.numberOfWords);

  // A place to store the randomely geenerated word:
  let word;

  for (let i = 0; i < amount; i++) {
    word = randomWordList(Number(req.params.wordsLength));
    console.log("The number is: ", word);
    words.push(word);
  }
  console.log(words);

  res.send(words);
});

const hostname = "http://flip3.engr.oregonstate.edu:";
const port = 5152;

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
