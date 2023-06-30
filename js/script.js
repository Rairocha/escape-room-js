function start(){
    let game = new Game()
    game.start();
    return
};
window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    
  
    startButton.addEventListener("click", function () {
      start();
    })
    restartButton.addEventListener("click", function () {
        // Call the restartGame function when the button is clicked
        window.location.reload();
      });};