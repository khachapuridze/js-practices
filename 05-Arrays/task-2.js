// ####Task 2

// Create your own implementation of function `filter`, logic and behavior should be the same as original method.

// Function should contain checks:

// - First parameter required and has to be only array
// - Second parameter required and has to be only function

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```


let arr = [1, -1, 2, -2, 3];


function filter(arg,cb){
    if (Array.isArray(arg) && cb === 'function' ){
        let arg2=[];
        let res = false;
        
        for(let i=0; i<=arg.length; i++){
            let res = cb(arg[i], i , arg);
            if (res == 'true'){
            arg2.push(arg[i]);
            }
        }
        return arg2;
    
    }      
}
let a = filter(arr,function(item, i, arr) {
    return item>0;
});
console.log(a);
  
  