class Object {
    constructor(name, clue, clue2,height, width, left,top, key, doorTo=false) {
      this.interacted = false;
      this.clue = clue;
      this.clueInteraction = clue2
      this.name = name;
      this.height = height;
      this.width = width;
      this.top=top;
      this.left = left;
      this.key = key;
      this.doorTo = doorTo;

    }
    interaction(game) {
      if (this.doorTo) { this.open(game); return }
      if (this.key) { game.player.keysCollected.push(this.key) }
      this.popup(game);
      this.interacted = true;
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

    }

    popup(game){
      let popup = document.getElementById('cluePopup');
      popup.classList.add('show')
      let cluepop;
      if (this.interacted){cluepop=this.clueInteraction} else{cluepop=this.clue}
      document.querySelector('#cluePopup>.popup-content>h1').innerHTML=`You check out the ${this.name} ${cluepop}`
      document.querySelector('#closePopup').addEventListener("click", function () {
        popup.classList.remove("show");
    });
    }
  };