let boxes = document.querySelectorAll(".box"); //Selecting all the boxes and placing it into one variable "Boxes"

let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//Choosing Turn For Players
let turn0 = true;

let turnIndicator = document.getElementById("turn-indicator");

let clickSound = document.getElementById("click-sound");
let winSound = document.getElementById("win-sound");
let drawSound = document.getElementById("draw-sound");

//Winning Pattern with JS Arrays
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  turnIndicator.innerText = "Turn: O";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    clickSound.play(); // ✅ Play click sound
    if (turn0) {
      box.innerText = "o";
      turn0 = false;
      turnIndicator.innerText = "Turn: X";
    } else {
      box.innerText = "x";
      turn0 = true;
      turnIndicator.innerText = "Turn: O";
    }
    box.disabled = true; //Clicking Button Will Not Work Second Time, After Click It will be disabled.//
    checkWinner();
  });
});

//After Winning Buttons Will Be Blocked
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//Enable Boxes Again
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  winSound.play();
  msg.innerText = `Congratulations, Winner is ${winner}✨`;
  msgContainer.classList.remove("hide");
  disabledBoxes(); //Calling Disables Box After Win
};

const checkWinner = () => {
  let winnerFound = false;

  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        winnerFound = true;
        return; // Stop checking after win
      }
    }
  }

  // If no winner and all boxes are filled => it's a draw
  let allFilled = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      allFilled = false;
      break;
    }
  }

  if (!winnerFound && allFilled) {
    drawSound.play();
    msg.innerText = "It's a Draw 🤝";
    msgContainer.classList.remove("hide");
    disabledBoxes();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
