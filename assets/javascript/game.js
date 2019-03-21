var winningNumber = 37;
var crystalValues = [];
var wins = 0;
var losses = 0;
var currentScore = 0; 
function clickHandler(index) {
    $( "#result").html ("");
    currentScore += crystalValues[index]
    $( "#currentScore" ).html (currentScore);
    if (currentScore > winningNumber) {
        losses++;
        $("#result").html ("You lost!!");
        newGame()
    }
    if (currentScore == winningNumber) {
        wins++;
        $("#result").html ("You won!!");
        newGame()
    }

}

function newGame() {
    currentScore = 0;
    winningNumber = Math.floor(Math.random() * (120-19) + 19) +1;
    $( "#winningNumber" ).html (winningNumber);
    
    crystalValues = [];
    for (var i = 0; i < 4; i++) crystalValues.push(Math.floor(Math.random() * 12) +1);
    
    //Setting up wins and losses
    $( "#wins" ).html (wins);
    $( "#losses" ).html (losses);
    
}

//Setting up current score
$( "#currentScore" ).html (currentScore);


//Setting up crystal interactivity
$( "#crystal1" ).click(() => {
    clickHandler(0);
})
$( "#crystal2" ).click(() => {
    clickHandler(1);
})
$( "#crystal3" ).click(() => {
    clickHandler(2);
})
$( "#crystal4" ).click(() => {
    clickHandler(3);
})
newGame();



