
function reduceRight(arr,cb,acc) {
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
    let res = acc;
    let rev = arr.reverse();
    for (count;count<arr.lengthe; count++) {
        res = cb(res, rev[count],count,arr);
    }

    return res;
} 

let arr = ['a','b','c'];

let result = reduceRight(arr,function(acc,item,i,arr){
    return acc + item;
},0)

console.log(result);
