function getDivisors(numb){
    if (numb === 0){
        throw new Error ('parameter can\'t be a 0');
    }
    if (typeof numb ==='number'){
        let arr = [];
        for (let i=1; i<=numb; i++){
            if (numb % i ==0)
            arr.push(i);
        }
        return arr;
    }
    else{
        throw new Error('parameter type is not a Number');
    }
}

console.log(getDivisors(12));
