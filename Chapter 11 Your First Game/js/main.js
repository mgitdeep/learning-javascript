// Your First Interactive Game

let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
    //play
    // first let the player make a choice
    let playerChoice = prompt("Please enter rock, paper or scissors!");
    
    // now check whether user make any choice or not
    if (playerChoice) {
        // continue to play and handle the user Input
        let playerOne = playerChoice.trim().toLowerCase();
        // now we've to find out is it rock, paper or scissors
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            
            // as it's confirmed that user has made a choice, now it's the Computer's time
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            // now the Computer has also made a choice. 
            // so now we can apply the actual game logic with Ternary Operators
            
            let result = playerOne === computer ? "Tie Game!" : playerOne === "rock" && computer === "paper" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` : playerOne === "paper" && computer === "scissors" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` : playerOne === "scissors" && computer === "rock" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins!`;

            alert(result);

            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");

        } else {
            alert("You didn't enter rock, paper or scissors!");
        }
    } else if(playerChoice === "") {
        alert("You didn't enter rock, paper or scissors!");
    } else {
        alert("I guess you changed your mind! Maybe next time.");
    }
} else {
    // if user hits "Cancel"
    alert("Ok, maybe next time...");
}