import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

export { Dog }