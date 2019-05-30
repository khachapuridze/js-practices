function forEach(arg,cb){
    if (Array.isArray(arg) && typeof cb === 'function' ){
    for (i=0; i<arg.length; i++){
        cb( i, arg[i], arg);
    }
    }
    else {
        throw new Error('Wrong Parameters');
    }
};
var arr = [1,2,3];


forEach(arr, function(item, i, arr) {
    console.log('index '+i + ': '+item+ ' element of '+' array '+arr);
});

