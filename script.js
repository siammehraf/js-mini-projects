const boxes = document.querySelectorAll(".box");
const clickSound = document.getElementById("clickSound");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle animation pause
    box.classList.toggle("paused");

    // Play the sound
    clickSound.currentTime = 0; // Rewind to start
    clickSound.play();
  });
});

/* 
  Boxes Animation
  © 2025 Siam Mehraf
  All rights reserved.
*/
