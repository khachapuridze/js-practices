// ####Task 6

// Create the function `isEven ()` that takes a number as a parameter and checks whether this number
//  is even or not. If even, the function returns `true`, if odd -` false`. This function have to validate
//   the input parameter, because function can accept only a number.

// *Even numbers can be divisible by 2 without remainder.*

// ```js
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// ```

function isEven(numb) {
    if(numb%2==0){
        console.log('true');
    }
    else if (typeof numb !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    else  {
        console.log('false');
    }

    
}
isEven('fg');