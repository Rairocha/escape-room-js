class Room{
    constructor(objects){
        this.objects = objects;
    }
    interact(elementName,text){
        if (this.objects.includes(elementName)){
             objectsObject[elementName].interaction(text,player)
        }

    }
};