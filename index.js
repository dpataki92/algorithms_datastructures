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

// lightBulbs - solves switching light bulbs problem
function lightBulbs(N) {
    let lightbulbs = [];

    for (let i = 0; i < N; i++) {
        lightbulbs.push(false)
    }

    for (let i = 1; i <= N; i++) {
        let count = 1;
        let nth = i * count;

        while(nth !== N) {
            lightbulbs[nth - 1] = !lightbulbs[nth - 1];
            count += 1;
            nth = i * count;
        }
    }

    return lightbulbs;
}


// overlapping - lists integers that overlap in two ranges
function overlapping(range1, range2) {

    let fullRangeStart = range1[0] >= range2[0] ? range1[0] : range2[0];
    let fullRangeEnd = range1[1] <= range2[1] ? range1[1] : range2[1];

    let  result = [];

    for (let i = fullRangeStart; i <= fullRangeEnd; i++) {result.push(i)}

    return result;

}

function overlapping2(range1, range2) {
    let overlap = [];
    
    for (let i = range1[0]; i <= range1[1]; i++) {
        if (i >= range2[0] && i <= range2[1]) {
        overlap.push(i);
        }
    }
    return overlap;
}

// meanMedianMode - returns mean, median, and mode of an array
function meanMedianMode(arr) {
    let mean = arr.reduce((a, b) => a + b) / arr.length;

    arr = arr.sort();
    let median = arr[Math.floor(arr.length / 2)];

    let mode = undefined;
    let hashTable = {};
    for (let i of arr) {
        hashTable[i] === undefined ? hashTable[i] = 1 : hashTable[i] += 1;
        if (mode === undefined || hashTable[i] > mode) {
            mode = i;
        }
    }
    return { 'mean': mean, 'median': median, 'mode': mode };
}

// encodeConsonants - encode consonants within a string by replacing every consonant with the next consonant in the alphabet
function encodeConsonants(str) {
    let result = '';

    let vowels = ['a', 'e', 'i', 'u', 'o'];

    for (let c of str) {
        if (c === 'z') {result += 'b'}
        else if (c === ' ' || vowels.includes(c)) {result += c}
        else if (!vowels.includes(c)) {
                let charCode = c.charCodeAt();
                vowels.includes(String.fromCharCode(charCode + 1)) ? result += String.fromCharCode(charCode + 2) : result+=  String.fromCharCode(charCode + 1);
            } 
    }
    return result;
}

// convert - converts an array of strings into an object
function convert(str) {
    let arr = str.split(" ");
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let personObj = {};
        let personArr = arr[i].split(',');

        personObj.email = personArr[1];
        personObj.age = personArr[2];
        personObj.occupation = personArr[3];

        obj[personArr[0]] = personObj;
    }

    return obj;
}

// threeSum - determines if any three numbers within the array sum to S
function threeSum(arr, S) {
    let sorted = arr.sort((a,b) => a-b);

    for (let i = 0; i < sorted.length - 2; i++) {

        let pointerStart = i+1;
        let pointerEnd = sorted.length-1;

        while (pointerStart < pointerEnd) {
            let sum = sorted[i] + sorted[pointerStart] + sorted[pointerEnd];

            if (sum === S) {return true}
            else if (sum < S) {pointerStart += 1}
            else if (sum > S) {pointerEnd -= 1}
        }
    }
    return false;
}

// largestSubarraySum - Kadene's algorithm - the maximum subarray at each element is either the current element itself, or the current element 
// plus the maximum subarray ending at the previous element.

function largestSubarraySum(array){

    let currentMax = array[0];
    let globalMax = array[0];
        
        for (let i = 1; i < array.length; i++) {

            currentMax = Math.max(array[i], array[i] + currentMax)

            if (currentMax > globalMax) {globalMax = currentMax}
            
        }
    
    return globalMax;
}


function maxSubarray(a) {
    let maxSoFar = a[0]
    let elementsSoFar = [a[0]]

    for (let i = 1; i < a.length; i++) {
        if (a[i] > (elementsSoFar.concat(a[i])).reduce((a,b) => a+b)) {
            elementsSoFar = [a[i]]
        } else {
            elementsSoFar.push(a[i])
        }
        maxSoFar = Math.max(maxSoFar, elementsSoFar.reduce((a,b) => a+b));
    }

    return maxSoFar
}

// binarySearch - finds out if string contains letter, divides the dataset with each attempt to find a match
function binarySearch(str, letter) {
    let string = str.split("").sort().join("");

    let startpoint = 0;
    let endpoint = string.length - 1;
    let guessPosition = parseInt((endpoint - startpoint)/2);

    while (startpoint != endpoint) {
        if (string[guessPosition] < letter) {

            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2);

        } else if(string[guessPosition] > letter) {
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2);

        } else {
            return true;
        }
    }
    if(string === letter){
      return true
    } else{
      console.log('sorry')
      return false;
    }
  }

  // prints out characters of string using recursion
function printString(str) {
    console.log(str[0]);

    if (str.length > 1) {

        let substr = str.substring(1, str.length);
    
        printString(substr);

    } else {

        return true;
    }

}

// reverts string using recursion
function reverseString(str) {
    if (str === "") {
      return "";

    } else {
    
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
/*
recursionReverse('hello')
(recursionReverse('ello') + 'h')
((recursionReverse('llo') + 'e') + 'h')
(((recursionReverse('lo') + 'l') + 'e') + 'h')
((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')
*/

// checks if a string is a palindrome using recursion
function isPalindrome(str) {
    let length = str.length;

    if (length < 2) {return true};

    if (str[0] === str[str.length-1]) {
        return isPalindrome(str.substr(1, str.length-2));
    }

    return false;
}

// adds the elements of an array up to a given index 
function addUpTo(arr, i) {
    if (i === 0) {
        return arr[0];
    } 
    else {
        return addUpTo(arr,i-1) + arr[i];
    }
}

// finds the largest integer in an array
function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return maxOf(arr.sort().slice(1));
    }
}

// checks if a number is presented in an array
function includesNumber(arr, num) {
    if (arr.length === 0) {return false}
    if (arr[0] === num) {return true}
    else {
        return includesNumber(arr.slice(1), num)
    }
}

// insertion sort - finds minimum element, removes it and pushes it to new array until the original is empty
function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1);
    return min;

}

function selectionSort(array){
    let sortedArray = [];

    for (let i = array.length-1; i >= 0; i--) {
        sortedArray.push(findMinAndRemove(array));
    }

    return sortedArray;
}

// mergeSort - splits array into one element subarray and then merges them into one sorted array
function merge(arr1, arr2) {
    let sorted = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {sorted.push(arr1.shift())}
        else {sorted.push(arr2.shift())}
    }

    return sorted.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    let midPoint = arr.length / 2;
    let firstHalf = arr.slice(0, midPoint);
    let secondHalf = arr.slice(midPoint, arr.length);

    if (arr.length < 2) {
        return arr;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}