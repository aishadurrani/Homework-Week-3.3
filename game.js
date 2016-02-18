var wordBank = ["pumpkin", "halloween", "spiders", "candycorn", "ghosts", "bats", "vampires", "witches", "goblins"];
var word;
var guessesLeft;
var placeholder;
var input;
var wordLength;
var currentWord;

function newGame(){
     placeholder = "";
     guessesLeft = 1;
     word = wordBank[getRandom(0,wordBank.length)];
     wordLength = word.length;
     console.log(word);
     var myElement = document.getElementById("button").innerHTML = "Click to guess";
     var myPicElement = document.getElementById("hangimage").src = "assets/images/HM1.jpg";

     for (var count = 0; count < word.length; count++)
     {
          placeholder = placeholder + "-";
     }

     document.getElementById("placeholder").innerHTML = placeholder;
     document.getElementById("gamestatus").innerHTML = "Game running";
  }
  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  function guessLetter()
  {
     var correct = 0;

     var inputBox = document.getElementById("guessinput");
     input = inputBox.value;


     for (var count = 0; count < wordLength; count++)
     {
       if (input == word.substring(count, count + 1))
       {
        correct++;
        placeholder = placeholder.substring(0, count) + input + placeholder.substring(count + 1, placeholder.length + 1);
        document.getElementById("placeholder").innerHTML = placeholder;
       }
    }

    if (correct == 0)
    {
      guessesLeft++;
    }
    var url = document.getElementById("hangimage").src = "assets/images/HM" + guessesLeft + ".jpg";

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "assets/images/HM1.jpg";
      alert("You guessed the word correctly. You win!");
    }

    if (guessesLeft == 11)
    {
      alert("You lose");
      newGame();
    }
  }
newGame();
document.getElementById("button").onclick = guessLetter;