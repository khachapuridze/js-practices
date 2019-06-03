function truncate(string, maxlength){
    if (typeof string !== 'string' && typeof maxlength !== 'number'){
        throw new Error ('Wrong types');
    }
    let ending = '...';
    if(string.length > maxlength){
        return string.substring(0, maxlength - ending.length) + ending;
    }
    else{
        throw new Error ('Not grater!');
    }

}

console.log(truncate('I wanna to say next thing about this topic', 22));