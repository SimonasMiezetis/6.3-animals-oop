import { Pet } from "./Pet.js";

class Hamster extends Pet {
    constructor(name, color, sound, canEatTillDeath) {
        super(name, color, sound);
        this.canEatTillDeath = canEatTillDeath;
    }
}

export { Hamster }