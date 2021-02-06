import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Animal } from './components/Animal.js';
import { Pet } from './components/Pet.js';
import { Hamster } from './components/Hamster.js';
import { Bird } from './components/Bird.js'
import { Goldfish } from './components/Goldfish.js'
import { Fish } from './components/Fish.js'

const rexas = new Dog('Rexas', 'brown');
const rainis = new Cat('Rainis', 'white');

const badis = new Bird('Badis', 'white', 'Au Au Au', 2 , true);
console.log(badis);
badis.flyAway();

const auksius = new Goldfish('Auksius', 'gold', 'blurp blurp blurp', true, true)
console.log(auksius);
auksius.introduce();
auksius.makeWish();
auksius.swimAway();



