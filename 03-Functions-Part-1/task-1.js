var f = function(numb) {
    if (typeof numb  === 'number'){
        return numb ** 3;
    }
    else {
        throw new Error('parameter type is not a Number');
    }
}

console.log(f('cv'));