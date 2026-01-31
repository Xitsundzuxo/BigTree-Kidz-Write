if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

function startLearning() {
  document.getElementById("parentScreen").classList.add("hidden");
  document.getElementById("kidScreen").classList.remove("hidden");
}

if (navigator.vibrate) {
  navigator.vibrate(100);
}

let words = [];
let currentIndex = 0;

function saveWords() {
  const input = document.getElementById("wordInput").value;
  words = input
    .split("\n")
    .map(w => w.trim())
    .filter(w => w.length > 0);

  localStorage.setItem("bigtreeWords", JSON.stringify(words));
  alert("Words saved successfully 🌳");
}

function startLearning() {
  const saved = localStorage.getItem("bigtreeWords");

  if (!saved) {
    alert("Please enter and save words first.");
    return;
  }

  words = JSON.parse(saved);

  if (words.length === 0) {
    alert("No words found.");
    return;
  }

  currentIndex = 0;

  document.getElementById("parentScreen").classList.add("hidden");
  document.getElementById("kidScreen").classList.remove("hidden");

  showWord();
}

function showWord() {
  const wordDisplay = document.getElementById("currentWord");
  wordDisplay.textContent = words[currentIndex];

  clearCanvas();
}

function nextWord() {
  if (currentIndex < words.length - 1) {
    currentIndex++;
    showWord();
  } else {
    alert("Great job! 🎉 All words completed.");
  }
}
