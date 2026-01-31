if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

function startLearning() {
  document.getElementById("parentScreen").classList.add("hidden");
  document.getElementById("kidScreen").classList.remove("hidden");
}
