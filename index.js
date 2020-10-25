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