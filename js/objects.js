class Object {
    constructor(name, clue,height, width, left,top, key, doorTo=false) {
      this.interacted = false;
      this.clue = clue;
      this.name = name;
      this.height = height;
      this.width = width;
      this.top=top;
      this.left = left;
      this.key = key;
      this.doorTo = doorTo;

    }
    interaction(new_text, game) {
      if (this.doorTo) { this.open(game); return }
      this.interacted = true;
      if (new_text) { this.clue = new_text }
      if (this.key) { game.player.keysCollected.push(this.key) }
    }
  
    open(game) {
      
      if ((game.player.keysCollected.includes(this.name))&&
            (!game.player.openDoors.includes(this.name))) {
        game.player.openDoors.push(this.name);
        this.clue = "This door is open";}
      if (game.player.openDoors.includes(this.name)){
        game.player.currentRoom = this.doorTo.filter(r => r!=game.player.currentRoom)[0]
        game.gameScreen.style.backgroundImage = `url(${game.roomsObject[game.player.currentRoom].image})`
      }

    }
  };