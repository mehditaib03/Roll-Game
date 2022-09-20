const message = document.getElementById("message");

const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

const PlayerDice1 = document.getElementById("player1Dice");
const PlayerDice2 = document.getElementById("player2Dice");

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;


//Roll Dice Button
rollBtn.addEventListener("click", () => {
    let randomD = Math.floor(Math.random() * 6 + 1);
    //check if player 1 is true and give it dice a random number
    if (player1Turn) {
        message.textContent = `Player 2 Turn`;
        PlayerDice1.textContent = randomD;
        PlayerDice1.classList.remove("active");
        PlayerDice2.classList.add("active");
        player1Score += randomD;
        player1Scoreboard.textContent = player1Score;
    }
    // if player1 is false the give the roll to player 2 and give it dice a random number
    else {
        message.textContent = `Player 1 Turn`;
        PlayerDice2.textContent = randomD
        PlayerDice2.classList.remove("active");
        PlayerDice1.classList.add("active");
        player2Score += randomD;
        player2Scoreboard.textContent = player2Score;
    }

    /*     if (player1Turn) {
            player1Turn = false
        }
        else{
            player1Turn = true
        } */

    //if its true convert it to false and the opposite is correct
    player1Turn = !player1Turn;

    //Check if player is won (first achive 21)
    function ShowDisplayBtn() {
        rollBtn.style.display = "none";
        resetBtn.style.display = "inline-block";
    }


    if (player1Score > 21) {
        message.textContent = "Player 1 Won 🥳";
        ShowDisplayBtn()

    }
    else if (player2Score > 21) {
        message.textContent = "Player 2 Won 🥳";
        ShowDisplayBtn()
    }
    else {

    }
})

// Reset Button

resetBtn.addEventListener("click",resetfn);

function resetfn() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    message.textContent ="Player 1 turn";
    PlayerDice1.textContent = "-";
    PlayerDice1.classList.add("active");
    PlayerDice2.classList.remove("active");
    PlayerDice2.textContent = "-";
    player1Scoreboard.textContent = player1Score;
    player2Scoreboard.textContent = player2Score;
    resetBtn.style.display="none";
    rollBtn.style.display = "inline-block";

}