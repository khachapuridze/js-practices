function some(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }
    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function');
    }
    let res = false;
    for (let i = 0; i < arr.length; i++) {
        res = callback(arr[i], i , arr);
        if (res == 'true') {
            break;
        }
    }
    return res;
};
  
let arr = [-2,-3,5,6];

let a = some(arr, function(item, i, arr) {
    return item  > 0;
});
console.log(a);
