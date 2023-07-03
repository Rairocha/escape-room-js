
class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player('Palace','Temple');
      this.height = "512px";
      this.width = "512px";
      this.objectsObject = 
      {// temple
         bread:new Object('Honey bread',"is this food? you have been here for so long you wouldn't mind a snack. Unfortunately Afrodite is watching, you save the honey bread for later",
      'You already grabed the honey bread but Afrodite is still watching, maybe later...',
                {height:'30px',width:'37px',left:'175px',top:'350px'},'Door Palace'),
      ants:new Object('Ants','The ants see your hard work and start helping you sort the grains!',
      'Thanks to the ants you were able to pass the test! You can move on to the next challenge',
                {height:'40px',width:'90px',left:'430px',top:'314px'},'Door Meadows'),
      bed:new Object("Afrodite's Bed",'this bed looks awesome. Perfect for naping? Not now. There is nothing in there','there is nothing in there',
                {height:'70px',width:'100px',left:'400px',top:'389px'},false),
      grains2:new Object('Pile of grains','This door is locked','This door is unlocked',
                {height:'60px',width:'160px',left:'230px',top:'340px'},false),
      grains1:new Object('Pile of grains','This door is locked','This door is unlocked',
            {height:'150px',width:'170px',left:'0px',top:'350px'},false),
      doorMeadow:new Object('Door Meadows','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:{Temple:'70px',Meadows:'40px'},
            width:{Temple:'40px',Meadows:'70px'},
            left:{Temple:'240px',Meadows:'15px'},
            top:{Temple:'262px',Meadows:'-70px'}}
            ,false,['Temple','Meadows']),
      //meadow
      coins:new Object('Coins','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'50px',width:'60px',left:'220px',top:'460px'},false),
      fur:new Object('Golden Fur','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'40px',width:'40px',left:'390px',top:'430px'},'Door Styx'),
      rams:new Object('Rams','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'100px',width:'200px',left:'100px',top:'330px'},false),
      eagle:new Object('Regular Eagle','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'50px',width:'60px',left:'440px',top:'70px'},false),
      doorStyx:new Object('Door Styx','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:{Meadows:'40px',Styx:'40px'},
            width:{Meadows:'70px',Styx:'70px'},
            left:{Meadows:'430px',Styx:'15px'},
            top:{Meadows:'213px',Styx:'171px'}},false,['Meadows','Styx']),
      //styx
      drowning:new Object('Drowning person','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'111px',width:'64px',left:'140px',top:'366px'},false),
      eagleKey:new Object('Zeus eagle','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'70px',width:'70px',left:'300px',top:'30px'},'Door Underworld'),
      chalice:new Object('Chalice','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'56px',width:'42px',left:'460px',top:'364px'},false),
      doorUnderworld:new Object('Door Underworld','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:{Styx:'40px',Underworld:'59px'},
            width:{Styx:'70px',Underworld:'118px'},
            left:{Styx:'405px',Underworld:'8px'},
            top:{Styx:'170px',Underworld:'200px'}},false,['Styx','Underworld']),
      //underworld
      box:new Object('Persephones Box','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'65px',width:'90px',left:'32px',top:'425px'},false),
      dog:new Object('Cerberus','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'70px',width:'80px',left:'255px',top:'385px'},false),
      charon:new Object('Charon','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:'59px',width:'55px',left:'235px',top:'285px'},false),
      doorPalace:new Object('Door Palace','key on the side table? Makes sense. You find a key','there is something weird about this side table almost like an AI model that has a vague idea what furniture looks like tried to make it. There is nothing in there',
            {height:{Underworld:'59px',Palace:'59px'},
            width:{Underworld:'118px',Palace:'118px'},
            left:{Underworld:'387px',Palace:'8px'},
            top:{Underworld:'201px',Palace:'200px'}},
            false,['Underworld','Palace']),      
      // final screen
      winFlag:new Object('The palace','Congrats the gods have seen your hard work and grant you immortality, you spend the rest of eternity in your palace with your lover.','Congrats you win',
            {height:'100%',width:'100%',left:'0px',top:'0px'},false)
        };

      this.roomsObject= 
      {Temple: new Room(['grains1','grains2','bed','ants','bread','doorMeadow'],'./images/afrodite-temple.jpg'),
      Meadows : new Room(['coins','fur','eagle','rams','doorStyx','doorMeadow'],'./images/meadows.jpg'),
      Styx: new Room(['drowning','eagleKey','chalice','doorStyx','doorUnderworld'],'./images/styx.jpg'),
      Underworld: new Room(['box','dog','charon','doorPalace','doorUnderworld'],'./images/underworld.jpg'),
      Palace: new Room(['winFlag'],'./images/heaven.jpg')};
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
        furniture.style.position='absolute';

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
