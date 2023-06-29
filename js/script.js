function start(){
    let game = new Game()
    game.start();
};
window.onload = function () {
    const startButton = document.getElementById("start-button");
    // const restartButton = document.getElementById("restart-button");
  
    startButton.addEventListener("click", function () {
      start();
    })};