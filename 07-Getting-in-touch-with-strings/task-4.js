function extractCurrencyValue(source){
    if (typeof source !== 'string'){
        throw new Error ('Not a string');
    }
    let result = source.slice(1);
    return +result;
}

console.log(extractCurrencyValue('$120'));