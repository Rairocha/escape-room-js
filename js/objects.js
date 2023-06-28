class Object {
    constructor(name, clue, key, doorTo=false) {
      this.interacted = false;
      this.clue = clue;
      this.name = name;
      this.key = key;
      this.doorTo = doorTo;
    }
    interaction(new_text, player) {
      if (this.doorTo) { this.open(player); return }
      this.interacted = true;
      if (new_text) { this.clue = new_text }
      if (this.key) { player.keysCollected.push(this.key) }
    }
  
    open(player) {
      
      if ((player.keysCollected.includes(this.name))&&
            (!player.openDoors.includes(this.name))) {
        player.openDoors.push(this.name);
        this.clue = "This door is open";
      }
      if (player.openDoors.includes(this.name)){
        player.currentRoom = this.doorTo.filter(r => r!=player.currentRoom)[0]
      }

    }
  };