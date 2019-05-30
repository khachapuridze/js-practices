// ####Task 2

// Create your own implementation of function `filter`, logic and behavior should be the same as original method.

// Function should contain checks:

// - First parameter required and has to be only array
// - Second parameter required and has to be only function

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```


var arr = [1, -1, 2, -2, 3];


function filter(arg,cb){
    if (Array.isArray(arg) && cb === 'function' ){
    for(i=0; i<=arg.length; i++){
        var arg2=[];
        if (arg[i],i,arr){
            arg2.push(arg[i]);
        }
    }
    return arg2;
}
}
filter(arr,function(item, i, arr) {
    console.log(item+i+arr);
});
  
  