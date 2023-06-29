class Room{
    constructor(objects,path){
        this.objects = objects;
        this.image = path
    }
    interact(elementName,text){
        if (this.objects.includes(elementName)){
             objectsObject[elementName].interaction(text,player)
        }

    }
};