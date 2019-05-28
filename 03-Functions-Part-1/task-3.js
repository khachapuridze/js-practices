// ####Task 3

// Write function `f` that do:
// - first parameter minus the second parameter
// - divide result of substraction on the third parameter.

// This function has to validate input parameters, because function can  accept only numbers.

// ```js
// f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number
// ```


function f(a,b,d) {
    if (typeof arguments === 'number'){
    let c=a-b;
    return c/d;
    }
    else {
        throw new Error ('all parameters type should be a Number');
    }
  
}

console.log(f(9,3,2));