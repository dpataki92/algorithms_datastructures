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

// Two Sum Problem - determines if any two numbers within the array sum to S
function twoSum(arr, S) {
    let hashTable = {};
    
    for (let i = 0; i < arr.length; i++) {
    
    let sumMinusElement = S - arr[i];
    
    if (hashTable[sumMinusElement] !== undefined) {
        return true;
    }

    hashTable[arr[i]] = true;
    }
    return false;
}

// SumArray - calculcates the sum of nested arrays
function sumNested(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== 'number') {
        result += sumNested(arr[i]);

    } else {
        result += arr[i];
    }
    }
    return result;
}

// ClockAngle - calculcates the angle on a clock
function clockAngle(hour, min) {
    let m = min * 6;
    let h = (hour * 30) + (min * 0.5);

    let angle = Math.abs(h-m);

    return angle > 180 ? 360 - angle : angle;
}


// isPrime - determines if N is a prime number
function isPrime(n) {
    if (n < 2) {return false}
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) {return false}
    }
    return true;
}

// custom map - implements the map iterator
function map (arr, func) {
    let newArr = [];

    for (let el of arr) {
        newArr.push(func(el));
    }

    return newArr;
}

// custom filter - implements the filter iterator
function filter (arr, func) {
    let newArr = [];

    for (let el of arr) {
        if (func(el)) {
            newArr.push(el);
        }
    }

    return newArr;
}

// removeChars - removes set of characters from a string
function removeChars(arr, str) {
    let strArr = str.split("")

    return strArr.filter(el => !arr.includes(el)).join("");
} 

function removeChars2(arr, string) {
    
    let hashTable = {};
    for (let c of arr) {
        hashTable[c] = true;
    }
    
    let result = '';
    for (let c of string) {
        if (hashTable[c] === undefined) {
            result += c;
        }
    }

    return result;
}

// matchingParens - checks if valid number of parenthesis
function matchingParens(str) {
    let counter = 0;

    for (let c of str) {
        c === '(' ? couter += 1 : counter -= 1;
    }

    return counter === 0 ? true : false;
}

// firstNonRepChar - finds first non-repeating character
function firstNonRepChar(str) {
    let results = {}

    for (let c of str) {
        results[c] === undefined ? results[c] = 1 : results[c] += 1;
    }

    for (let prop in results) {
        if (results[prop] === 1) {
            return results[prop]
        }
    }

    return -1;
}

// threeVowels - counts words that have at least 3 continuous vowels
function threeVowels(str) {
    
    let arr = str.split(' ');
    let count = 0;
    
    const pattern = /[aeiou]{3,}/gi;
    
    for (let word of arr) {
        if (word.match(pattern) !== null) {
            count += 1;
        }
    }

    return count;
}

// removePairs - removes all adjacent matching characters
function removePairs(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i === str.length-1) {result += str[i]}
        else if (str[i+1] !== str[i]) {
                result += str[i]
            }
    }

    return result;
}

// majorityElement = finds the majority element (element that appears more than n/2 times)
function majorityElement(arr) {
    let hashTable = {};
    let threshold = Math.floor(arr.length / 2);

    for (let el of arr) {
        hashTable[el] === undefined ? hashTable[el] = 1 : hashTable[el] += 1;
    }

    for (let prop in hashTable) {
        if (hashTable[prop] > threshold){return parseInt(prop)}
    }

    return null;

}

function majorityElement2(arr) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
    if (candidate === null || count === 0) {
        candidate = arr[i];
        count = 1;
    } else if (arr[i] === candidate) {
        count += 1;
    } else {
        count -= 1;
    }
    }
 
    count = 0;
    for (let el of arr) {
        if (el === candidate) {
        count += 1;
        }
    }
    return (count > Math.floor(arr.length / 2)) ? candidate : null;
}