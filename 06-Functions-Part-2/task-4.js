const compose = (...x) => (arg) => {
    let result = x.reverse();
    for (let i = 0; i<= parameters.length -1; i++){
        arg= result[i](func);
    }
    return arg;
}
compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'

// Main idea of function `compose` is `compose(f, g)(x) = f(g(x))`