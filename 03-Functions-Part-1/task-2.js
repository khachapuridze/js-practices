function f(){
    let sum = 0;
    for (let i of arguments) {
        if (typeof i ==='number') {
            sum=sum +i;
        }
        else {
            throw new Error ('all parameters type should be a Number');
        }
    }
    return sum;
  
  }
  
console.log(f(1,2,3));