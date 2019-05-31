let list = [1,2,3,-4,-2,-1,2], sum=0;

for (let i of list){
    if(i>=0){
    sum+=i;
    }
}
console.log(sum);