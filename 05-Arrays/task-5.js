function Reduce(arr,cb,acc) {
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array');
    }

    if (!(typeof cb ==='function')) {
        throw new Error('Second parameter required and has to be only function');
    }

    if (!(typeof acc ==='string' || typeof acc ==='number')) {
        throw new Error('Third parameter required and has to be only string or number');
    }

    let count = 0;
    let res = acc
    for (count;count<arr.length; count++) {
        res = cb(res, arr[count],count,arr);
    }

    return res;
} 

let arr = [1,2,3];

let result = Reduce(arr,function(acc,item,i,arr){
    return acc + item;
},0)

console.log(result);
