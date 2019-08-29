// const el = document.querySelector("#start-btn");

function initGame() {
  const el = document.querySelector(".p5Canvas");

  el.onclick = function() {
    document.querySelector(".start").style.display = "none";
    startGame = true;
    // setup();
  };
}
