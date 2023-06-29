
class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player();
      this.height = "600px";
      this.width = "500px";
      this.objectsObject = 
      { couch:new Object('Couch','nothing in there','109px','157px','12px','307px',false),
      piano:new Object('Piano','you find a key','198px','207px','286px','265px','Door A'),
      doorA:new Object('Door A','This door is locked','116px','193px','183px','147px',
                     false,['Living Room','Bedroom']),
      bed:new Object('Bed','nothing in there','171px','104px','186px','294px',false),
      doorB:new Object('Door B','This door is locked','0px','0px','0px','0px',
                      false,['Bedroom','Outside']),
      kingBed:new Object('King Bed','nothing in there','0px','0px','0px','0px',false)};

      this.roomsObject= 
      {'Living Room': new Room(['couch','piano','doorA'],'../images/room1.jpg'),
      Bedroom : new Room(['bed','doorA','doorB'],'../images/room2.jpg')};
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.counter=0;
    };
  start() {
    this.gameScreen.style.height = this.height;
    this.gameScreen.style.width = this.width;

    // Hide the start screen
    this.startScreen.style.display = "none";
    
    this.startScreen.style.height = "0px"
    // Show the game screen
    this.gameScreen.style.display = "block";

    // Start the game loop
    this.play();
     };
play(){
        if(this.player.currentRoom == this.player.targetRoom){
            console.log('Congrats! you win!');
            return
        }
        else{this.explore()}
        };
explore(){
    console.log(`You are in the ${this.player.currentRoom} which contains ${this.roomsObject[this.player.currentRoom].objects}`);
    this.gameScreen.style.backgroundImage = `url(${this.roomsObject[this.player.currentRoom].image})`
    this.roomsObject[this.player.currentRoom].objects.forEach(element => {
        console.log(element);
        let furniture = this.gameScreen.appendChild(document.createElement("div"));
        furniture.classList.add('furniture');
        furniture.style.position='relative';
        furniture.style.top=this.objectsObject[element].top;
        furniture.style.left=this.objectsObject[element].left;
        furniture.style.width=this.objectsObject[element].width;
        furniture.style.height=this.objectsObject[element].height;
        furniture.style.cursor='pointer';
        furniture.id = element;
    })
    document.querySelectorAll('.furniture').forEach(function(f){

    })
  //roomsObject[player.currentRoom].interact('piano','Beautiful music');
  //roomsObject[player.currentRoom].interact('doorA');
  //console.log(player.currentRoom)
  
  };
};
