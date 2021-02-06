import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Animal } from './components/Animal.js';
import { Pet } from './components/Pet.js';
import { Hamster } from './components/Hamster.js';
import { Bird } from './components/Bird.js'

const rexas = new Dog('Rexas', 'brown');
const rainis = new Cat('Rainis', 'white');

const badis = new Bird('Badis', 'white', 'Au Au Au', 2 , true);

console.log(badis);
badis.flyAway();
