// This is my first javascript code 
console.log('Hello world');

//VARIABLES 
//STORES DATA TEMPORALLY IN THE MEMORY
let name = "Mark";
document.write(name);


// CONSTANTS   
const intrestRate = 2;
document.write(intrestRate);

/*   Reference types:
        Objects 
        Array 
        Functions 
*/ 

//objects 
let person ={
    name : 'mark',
    age : 25
};
//Dot   Notation 
 person.name = 'John';
console.log(person.name);

// Bracket Notation 
person['name'] = 'Mary';

console.log(person.name);

//ARRAYS 
let selectorColors = ['bread','glue'];
selectorColors[2] = 'han';
console.log(selectorColors.length);

//FUNCTIONS 
//performs a task
function greet(name){
    console.log('Hello ' + name);
}

greet('Lusala');
greet('Faith');

//types of functions 
//Calculating a value 
function square(number){
    return number * number;
}
let number = square(9);
console.log(number)
console.log(square(6));