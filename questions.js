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