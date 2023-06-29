
class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player('Outside','Living Room');
      this.height = "600px";
      this.width = "500px";
      this.objectsObject = 
      { couch:new Object('Couch','nothing in there','nothing in there',
                {height:'109px',width:'157px',left:'12px',top:'307px'},false),
      piano:new Object('Piano','you find a key','you already found this key',
                {height:'198px',width:'207px',left:'286px',top:'265px'},'Door A'),
      doorA:new Object('Door A','This door is locked','This door is unlocked',
                        {height:{'Living Room':'116px','Bedroom':'212px'},
                        width:{'Living Room':'193px','Bedroom':'34px'},
                        left:{'Living Room':'183px','Bedroom':'160px'},
                        top:{'Living Room':'57px','Bedroom':'72px'}},
                        false,['Living Room','Bedroom']),
      bed:new Object('Bed','nothing in there','nothing in there',
                {height:'171px',width:'104px',left:'186px',top:'294px'},'Door B'),
      doorB:new Object('Door B','This door is locked','This door is unlocked',
            {height:'100%',width:'10%',left:'290px',top:'0px'},false,['Bedroom','Outside']),
      kingBed:new Object('King Bed','nothing in there','nothing in there',
                {height:'0px',width:'0px',left:'0px',top:'0px'},false),
      winFlag:new Object('The outside word','Congrats you win','Congrats you win',
                {height:'100%',width:'100%',left:'0px',top:'0px'},false)
        };

      this.roomsObject= 
      {'Living Room': new Room(['couch','piano','doorA'],'../images/room1.jpg'),
      Bedroom : new Room(['bed','doorA','doorB'],'../../images/room2.jpg'),
      Outside: new Room(['winFlag'],'../../images/outside.jpg')};
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
  };
};
