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
