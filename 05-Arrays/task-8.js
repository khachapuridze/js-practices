const arrs = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

function f(arr){
    if (Array.isArray(arr)) {
    let res = 0;
    let arr2 = arr.flat(Infinity);
    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === 'number') {
            res += arr2[i];
        } else {
            return 0;
        }
    }
    return res;
    }
    else {
        throw new Error('first parameter type is not an Array');
    }
}
console.log(f(arrs));


