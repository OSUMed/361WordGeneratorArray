var randomWord = require("random-word-by-length");
const express = require("express");
//const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

function randomWordList(numb) {
  return randomWord(numb);
}


// Example: app.get('/users/:userId/books/:bookId', function (req, res) {
//  res.send(req.params)
// })
// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO

app.get("/plus/amount/:numberOfWords/length/:wordsLength", function (req, res) {
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

const hostname = "localhost";
const port = 3000;

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
