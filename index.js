// Factorial function - factorialize numbers
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



