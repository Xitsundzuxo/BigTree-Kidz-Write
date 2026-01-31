function speakCurrentWord() {
  const word = document.getElementById("currentWord").textContent;
  if (!word) return;

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}
