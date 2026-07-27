class Interaction {
    static find(player, objects){
        for(const object of objects){
            const distance = Math.sqrt(
                Math.pow(player.x-object.x,2) +
                Math.pow(player.y-object.y,2)
            );
            if(distance < 100 && object.interaction){
                return object;
            }
        }
        return null;
    }
}
