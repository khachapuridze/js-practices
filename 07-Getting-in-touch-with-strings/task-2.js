function checkSpam(source, example){
    if (typeof source !== 'string' || typeof example !== 'string'){
        throw new Error ('Not string');
    }
    let sources = source.toLowerCase();
    let examples = example.toLowerCase();
    if(sources.includes(examples)){
        return true;
    }
    else {
        return false;
    }
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));