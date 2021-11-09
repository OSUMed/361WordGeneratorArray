var randomWord = require("random-word-by-length");
const express = require("express");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5152;

function randomWordList(numb) {
  return randomWord(numb);
}

//Fixed Header error from this code bit from StackOverflow: https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/test", function (req, res) {
  let test = randomWordList(4)
  res.send(test);
});

app.get("/amount/:numberOfWords/length/:wordsLength", function (req, res) {
  let words = []; 
  let amount;
  amount = Number(req.params.numberOfWords);
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
