class Object {
    constructor(name, clue, clue2,position, key, doorTo=false) {
      this.interacted = false;
      this.clue = clue;
      this.clueInteraction = clue2
      this.name = name;
      this.height = position.height;
      this.width = position.width;
      this.top=position.top;
      this.left = position.left;
      this.key = key;
      this.doorTo = doorTo;

    }
    interaction(game) {
      if (this.doorTo) { this.open(game); return }
      if (this.key) { game.player.keysCollected.push(this.key) }
      this.popup(game);
      this.interacted = true;
      return
    }
  
    open(game) {
      
      if ((game.player.keysCollected.includes(this.name))&&
            (!game.player.openDoors.includes(this.name))) {
        game.player.openDoors.push(this.name);
        this.clue = "This door is open";}
      if (game.player.openDoors.includes(this.name)){
        game.player.currentRoom = this.doorTo.filter(r => r!=game.player.currentRoom)[0]
        game.gameScreen.innerHTML = ''
        game.play()
      }
      else{this.popup(game)}
      return
    }

    popup(game){
      let popup = document.getElementById('cluePopup');
      popup.style.display='block';
      let cluepop;
      console.log(game.player.currentRoom);
      if (this.interacted){cluepop=this.clueInteraction} else{cluepop=this.clue}
      document.querySelector('#cluePopup>.popup-content>h4').innerHTML=`You check out the ${this.name} ${cluepop}`
      document.querySelector('#closePopup').addEventListener("click", function () {
        popup.style.display='none';
        
        if (game.player.currentRoom==game.player.targetRoom){
          console.log(game.player.currentRoom);
          console.log(game.player.targetRoom);
          console.log(game.player.currentRoom==game.player.targetRoom);
          game.gameScreen.style.display = "none";
          // Show end game screen
          game.gameEndScreen.style.display = "block";
          
        }
    });
    return
    }
  };