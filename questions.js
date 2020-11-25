// LANGUAGES BASICS

// What will be the output of the following code?
function Add(){
    console.log(answer)
    var answer = 2
};
Add();

// Write a Parentheses Checker function to determine if the input string’s opening and closing brackets are properly nested.
function balancedParentheses(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //if closing brace, pop from stack
        else {
            let lastEle = stack.pop();
            //Return false if the element popped doesn’t match the corresponding closing brace in the map 
            if (str[i] !== map[lastEle]) {return false};
        }
    }
    //if stack not empty at end, return false
    if (stack.length !== 0) {return false};

    return true;
}

// Remove the first the elements of an array using array destructuring
function removeFirstTwo(list) {
    const [, , ...arr] = list; 
    return arr;
} 

// Destructure undefined 
function pointValues(point){
    const {name:n,age:a} = {...point} // creates new object using the properties of point
    console.log(n)
    console.log(a)
}

// TYPE COERCION

// What will be the output of the code below?
var names = ["Tom","Anna",2,true]
console.log(names instanceof String)
console.log(names instanceof Number)
console.log(names instanceof Object)
console.log(names instanceof Array)

// Implement a function check that takes an object and determines if it is an array or not. It should return either true or false.
function check(obj) {
    if (Object.prototype.toString.call(obj) === "[object Array]") {
      return true;
    } else {
      return false;
    }
}

// What will the following code display?
console.log(Object.prototype.toString.call(new (function Custom(){})));

// CLOSURES

// What is the output of this function? // same woth var, updates with let because it's block-scoped
function buildFunctions() {
    let arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        })
    }

    return arr;
}

let fn = buildFunctions();
fn[0]();
fn[1]();
fn[2]();

// OOP

// write code for obj2 so that the statement returns true on line 5.
function isPrototype(){
    var obj1 = {x: 1};

    var obj2 = Object.create(obj1); //  Extra assignment
    
    console.log(
      obj1.isPrototypeOf(obj2)  
    ); 
   
  }

// You would be asked to modify the code to resolve its error with using ES6 classes
function Cat (name) {
    this.name = name
    }
    Cat.meow = function () {
    console.log(this.name + ' says meow')
}
let catty = new Cat('catty')
catty.meow()

// ====>

class Cat{
    constructor(name) {
        this.name = name;
    }
    
    meow(){
        console.log(this.name +  ' says meow')
    }
}

// implement inheritence between Human and Man
function Human(name, age) {
    this.name = name;
    this.age = age;
};

function Man(name, age) {
    Human.call(this, name, age); // extra line -  In order for Man to inherit its properties, we must call the constructor of the parent in Man’s constructor function.
};

Man.prototype = Object.create(Human.prototype); // extra line - creates a prototype chain, which means that any Man will have Human as its prototype.

function check(){
    var obj = new Man("Tommy Tan");
    console.log(obj.name) 
    console.log(obj instanceof Human) 
}

// FUNCTIONAL PROGRAMMING

// The following code has an impure function addAndPrint. Modify it into a pure function.
const addAndPrint = (a, b) => { 
    const sum = a+b;
    console.log(`The sum is ${sum}`);
    return sum;
};

// =>
const addAndPrint = (a, b) => { 
    return a+b;
};

// Shallow copying - what is the input?
const girl = {
    name: 'Anna',
    info: { age: 20, number: 123 }
};
  
const newGirl = { ...girl };
newGirl.info.age = 30;
console.log(girl.info.age, newGirl.info.age);

// => 30 30 because objects are passed through by reference 


// Study the code below. Is func1 a higher order function?
const func1 = function(num){
    return function(){
      if(typeof num == 'NaN'){
        return "Not a number"
      }else{
        return typeof(num)
      }
    }
}

// => Yes! Higher-order functions are those that accept functions as parameters or return a function as their output