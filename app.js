let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".btn");

const genCompChoice = () =>{
    const compChoices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return compChoices[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw Match. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Wins! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper and Scissors
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock and scissors
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            // rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game Reset! Please Make a move";
    msg.style.backgroundColor = "c#081b31";
});

