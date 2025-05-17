const boxes = document.querySelectorAll(".box");

// Initialize AudioContext
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Load and decode the click sound once
let clickBuffer = null;

fetch("click.mp3")
  .then((response) => response.arrayBuffer())
  .then((data) => audioCtx.decodeAudioData(data))
  .then((buffer) => {
    clickBuffer = buffer;
  })
  .catch((err) => {
    console.error("Failed to load audio:", err);
  });

boxes.forEach((box) => {
  box.clickCount = 0;

  box.addEventListener("click", () => {
    // Resume context (needed on mobile to allow audio)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    box.clickCount += 1;
    box.textContent = box.clickCount;

    // Play the sound using a new buffer source
    if (clickBuffer) {
      const source = audioCtx.createBufferSource();
      source.buffer = clickBuffer;
      source.connect(audioCtx.destination);
      source.start(0);
    }

    // Pause animation
    box.classList.add("paused");

    setTimeout(() => {
      box.classList.remove("paused");
    }, 1500);
  });
});
