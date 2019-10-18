/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this rule applies when none of the other this keyword rules applies, unless strict mode is being used
* 2. Implicit Binding - this is the most common used rule. it knows what to bind the information to by looking to the left of the dot. 
* 3. Explicit Binding - call, apply & bind are used to explicityly state what the this keyword is 
* 4. New Binding - constructs a new object and using the new binding points to it
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function ghost(){
    console.log(this.boo);
}

var boo = '👻 booooo';
ghost();

// Principle 2

// code example for Implicit Binding
let person = {
    name: 'Sorcha',
    age: 150,
    location: 'The Shadow Nexus',
    greet: function(){
        console.log(`Hello, my name is ${this.name}, I'm from ${this.location} and I'm ${this.age} years old`)
    }
}
person.greet();

// Principle 3

// code example for New Binding
function food(favorite){
    this.food = favorite;
}
let myFavoriteFood = new food('Spaghetti');

console.log(`My favorite food is ${myFavoriteFood.food}`);

// Principle 4

// code example for Explicit Binding
function hero(){
    console.log(this.saying);
}

let origHero = {
    name: 'Cairn',
    saying: 'For my tribe',
}

let newHero = {
    name: 'Sorcha',
    saying: 'For my children',
}
hero.call(origHero);
hero.call(newHero);