 function every(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array!');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function!');
    }
    var res = false;

    for (var i = 0; i < arr.length; i++) {
        res = callback(arr[i], i , arr);
        if (res == 'false') {
            break;
        }
    }

    return res;
};
  
const arr = [-2,8,7,-3];

var a = every(arr, function(item, i, arr) {
    return item  > 0;
});
console.log(a);
