function upperCaseFirst(str){
    if (typeof str !== 'string'){
        throw new Error ('Not string');
    }
    let first = str.charAt(0);
    let result = first.toUpperCase();
    return result + str.substring(1);
}

console.log(upperCaseFirst('pitter'));