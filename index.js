// Factorial - factorialize numbers
const factorial = (n) => {
    if (n < 0) {return -1}
    else if (n === 0) {return 1}
    else {
        return n * factorial(n-1);
    }
}

const factorial2 = (n) => {
    if (n < 0) {return -1}
    else if (n === 0) {return 1}
    else {
        let result;
        for (let i = 1; i <= n; i++) {
            result ? result *= i : result = i;
        }
        return result;
    }
}


// Sublength - returns length between 2 occurrences of a string character 
const subLength = (str, char) => {

    let indexes = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            if (indexes.length === 2) {return 0;}
            indexes.push(i);
        }
    }
    return indexes.length === 2 ? indexes[1] + 1 - indexes[0] : 0;
}

// Groceries - Collects values of objects stored in an array and concats them with , or 'and' based on array's length
const groceries = (arr) => {
    if (arr.length === 1) { return `${arr[0].item}`}
    else {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {str += ` and ${arr[i].item}`}
            else {str += `${arr[i].item}${i === arr.length - 2 ? "" : ", "}`}
        }
        return str;
    }
}   

// FizzBuzz - Returns Fizz if n is divisble by 3, Buzz if divisble by 5, and FizzBuzz if divisble by both
function fizzbuzz(n) {

    let result = [];

    for (let i = 1; i <= n; i++) {

    let add = '';

    if (i % 3 === 0 && i % 5 === 0) {add += 'FizzBuzz'}

    else if (i % 3 === 0) { add += 'Fizz'; }
    
    else if (i % 5 === 0) { add += 'Buzz'; }
    
    add === '' ? result.push(i) : result.push(add);
    }
    return result;
}


