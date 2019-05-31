function f(a,b,d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof d !== 'number') {
        throw new Error ('all parameters type should be a Number');
    }
    else {
        let c=a-b;
            return c/d;

    }
}

console.log(f(9,3,2));