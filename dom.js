const button = document.querySelector("button");
button.onclick = function() {
  document.querySelector(".start").style.display = "none";
  startGame = true;
  setup();
};
