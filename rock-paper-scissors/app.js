let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

// Load audio files
const clickSound = new Audio("assests/click.mp3");
const winSound = new Audio("assests/win.mp3");
const loseSound = new Audio("assests/lose.mp3");
loseSound.volume = 0.4;
const drawSound = new Audio("assests/draw.mp3");
drawSound.volume = 0.6;

// Math.random() generate a random number.
//   Math.random() * 3 will generate a number between zero to two. As our array is 0,1,2. So we multiplied math with three.
//   But there is one problem. It will generate decimal value.
//   To stop this. Math.floor(Math.random() * 3)
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game Was Draw");
  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "Blue";
  drawSound.play();
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreUpdate.innerText = userScore;
    console.log("You Win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    winSound.play();
  } else {
    compScore++;
    compScoreUpdate.innerText = compScore;
    console.log("You Loose");
    msg.innerText = `You Loose. Computer's ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red";
    loseSound.play();
  }
};
const playGame = (userChoice) => {
  console.log("User Choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    clickSound.play();
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
