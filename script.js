const boxes = document.querySelectorAll(".box");
const clickSound = document.getElementById("clickSound");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Pause the box
    box.classList.add("paused");

    // Play the click sound
    clickSound.currentTime = 0;
    clickSound.play();

    // Auto-resume after 3 seconds
    setTimeout(() => {
      box.classList.remove("paused");
    }, 1500);
  });
});

/* 
  Boxes Animation
  © 2025 Siam Mehraf
  All rights reserved.
*/
