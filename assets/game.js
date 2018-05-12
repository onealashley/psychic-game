    
    
    function reset() {
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerChoice)
        guesses = 10;
        guessesSoFar = [];
        document.getElementById("guessed").innerHTML = "Guessed so far:";
        document.getElementById("guesses").innerHTML = "Guesses left: 10";
    }
    
    
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var win = 0;
    var losses = 0;
    var guesses = 10;
    var guessesSoFar = [];

    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);

    function start() {
    document.onkeyup = function(event) {
        var userGuess = event.key;
        guessesSoFar[guessesSoFar.length]=userGuess;
		
        if (userGuess == computerChoice) {
            win = win + 1;
            document.getElementById("wins").innerHTML = "Wins: " + win;
            swal("You Win", "The Letter was " + computerChoice, "success", {
                button:"High Five!!",});
                 

        } else {
            guesses = guesses - 1;
            document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
            document.getElementById("guessed").innerHTML = "Guessed so far: " + guessesSoFar;

        }

        if (guesses == 0) {
            losses = losses + 1;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            swal("You Lose", "The Letter Was " + computerChoice, "warning", {
                button:"Try Again :("
            });
                             
        }

    } }
    
        