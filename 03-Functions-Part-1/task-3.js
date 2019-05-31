function f(a,b,d) {
    for (let i of arguments){
        if (typeof i === 'number'){
            let c=a-b;
            return c/d;
        }
        else {
            throw new Error ('all parameters type should be a Number');
        }
    }
}

console.log(f(9,3,2));