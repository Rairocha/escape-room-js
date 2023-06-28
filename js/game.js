
function explore(){
    console.log(`You are in the ${player.currentRoom} 
    which contains ${roomsObject[player.currentRoom]}`);
  //roomsObject[player.currentRoom].interact('piano','Beautiful music');
  //roomsObject[player.currentRoom].interact('doorA');
  //console.log(player.currentRoom)
  
  
    
}
;
function play(){
    if(player.currentRoom == player.targetRoom){
        console.log('Congrats! you win!');
        return
    }
    else{explore()}
    };


function start() {
    player = new Player();
    objectsObject = { couch:new Object('Couch','nothing in there',false),
                     piano:new Object('Piano','you find a key','Door A'),
                     doorA:new Object('Door A','This door is locked',
                                    false,['Living Room','Bedroom']),
                     bed:new Object('Bed','nothing in there',false),
                     doorB:new Object('Door B','This door is locked',
                                     false,['Bedroom','Outside']),
                     kingBed:new Object('King Bed','nothing in there',false)

    };

    roomsObject = {'Living Room': new Room(['couch','piano','doorA']),
                        Bedroom : new Room(['bed','doorA','doorB'])};
    play();
 };
