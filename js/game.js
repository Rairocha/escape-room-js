
class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player('Outside','Living Room');
      this.height = "512px";
      this.width = "512px";
      this.objectsObject = 
      { couch:new Object('Couch','you take a nap before remembering you woke up in a strange room and should probably be looking for a way out. There is nothing in there',
      'It looks rather confortable... maybe you should? No! No more napping. There is nothing in there',
                {height:'109px',width:'97px',left:'12px',top:'307px'},false),
      piano:new Object('Piano','after playing a cheerfull tune to motivate yourself you move on to escaping this strange room. You find a key',
      'since you already found this key you no longer need music to keep going. You got this!',
                {height:'198px',width:'207px',left:'286px',top:'165px'},'Door A'),
      doorA:new Object('Door A','This door is locked','This door is unlocked',
                        {height:{'Living Room':'42%','Bedroom':'212px'},
                        width:{'Living Room':'22%','Bedroom':'34px'},
                        left:{'Living Room':'35%','Bedroom':'60px'},
                        top:{'Living Room':'-150px','Bedroom':'-110px'}},
                        false,['Living Room','Bedroom']),
      bed:new Object('Bed','this bed looks awesome. Perfect for naping? Not now. There is nothing in there','there is nothing in there',
                {height:'121px',width:'154px',left:'186px',top:'294px'},false),
      doorB:new Object('Door B','This door is locked','This door is unlocked',
            {height:'212px',width:'34px',left:'410px',top:'-310px'},false,['Bedroom','Outside']),
      sideTable:new Object('Side Table','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
                {height:'150px',width:'60px',left:'440px',top:'160px'},'Door B'),
      winFlag:new Object('The outside word','Congrats you win','Congrats you win',
                {height:'100%',width:'100%',left:'0px',top:'0px'},false)
        };

      this.roomsObject= 
      {'Living Room': new Room(['couch','piano','doorA'],'./images/room1.jpg'),
      Bedroom : new Room(['bed','sideTable','doorA','doorB'],'./images/room2.jpg'),
      Outside: new Room(['winFlag'],'./images/outside.jpg')};
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.counter=0;
    };
  start() {
    this.gameScreen.style.height = this.height;
    this.gameScreen.style.width = this.width;
    this.gameScreen.innerHTML = "";
    // Hide the start screen
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.startScreen.style.height = "0px"
    // Show the game screen
    this.gameScreen.style.display = "block";

    // Start the game loop
    this.play();
    return
     };
play(){
    // console.log(`You are in the ${this.player.currentRoom} which contains ${this.roomsObject[this.player.currentRoom].objects}`);
    this.gameScreen.style.backgroundImage = `url("${this.roomsObject[this.player.currentRoom].image}")`
    this.roomsObject[this.player.currentRoom].objects.forEach(element => {
        
        let furniture = this.gameScreen.appendChild(document.createElement("div"));
        furniture.classList.add('furniture');
        furniture.style.position='relative';

        if (typeof this.objectsObject[element].top==='string'){

        furniture.style.top=this.objectsObject[element].top;
        furniture.style.left=this.objectsObject[element].left;
        furniture.style.width=this.objectsObject[element].width;
        furniture.style.height=this.objectsObject[element].height;}

        else {
        furniture.style.top=this.objectsObject[element].top[this.player.currentRoom];
        furniture.style.left=this.objectsObject[element].left[this.player.currentRoom];
        furniture.style.width=this.objectsObject[element].width[this.player.currentRoom];
        furniture.style.height=this.objectsObject[element].height[this.player.currentRoom];
        }
        furniture.style.cursor='pointer';
        furniture.id = element;
        furniture.addEventListener('click',()=>this.objectsObject[element].interaction(this))
    })  
    return
    };
  
};
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