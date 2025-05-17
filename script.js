const boxes = document.querySelectorAll(".box");
const clickSound = document.getElementById("clickSound");

boxes.forEach((box) => {
  // Initialize counter for each box
  box.clickCount = 0;

  box.addEventListener("click", () => {
    // Increment click count
    box.clickCount += 1;

    // Show the updated count inside the box
    box.textContent = box.clickCount;

    // Play the click sound
    clickSound.currentTime = 0;
    clickSound.play();

    // Pause animation
    box.classList.add("paused");

    // Resume animation after 1.5 seconds
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
