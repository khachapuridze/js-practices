function isEven(numb) {
    if(numb%2==0){
        return true;
    }
    else if (typeof numb !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    else  {
        return 'false';
    }

    
}
console.log(isEven(5));