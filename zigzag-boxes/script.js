const boxes = document.querySelectorAll(".box");

// Preload the click sound
const clickSound = document.getElementById("clickSound");

boxes.forEach((box) => {
  // Initialize counter for each box
  box.clickCount = 0;

  box.addEventListener("click", () => {
    // Increment click count
    box.clickCount += 1;

    // Show the updated count inside the box
    box.textContent = box.clickCount;

    // Clone the audio element to allow multiple rapid plays
    const soundClone = clickSound.cloneNode();
    soundClone.play().catch((e) => {
      console.log("Audio failed to play:", e);
    });

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
