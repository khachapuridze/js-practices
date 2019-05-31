function arrayFill(arg1,arg2){
    if (typeof arg1 === 'function'){
        throw new Error ('First parameter required and has to be only number, string, object array');
    }
    if (typeof arg2 !== 'number'){
        throw new Error ('Second parameter required and has to be only number');
    }
    let arr = [];
    for(let i=0; i<arg2;i++){

        arr.push(arg1);
    }
    return arr;

};
console.log(arrayFill('sdf',5));