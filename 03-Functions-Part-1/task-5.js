function isPositive (numb) {
    let arr = [1, 2, -4, 3, -9, -1, 7];
    let arr2 = [];
    if (typeof numb === 'number'){
    for (let i of arr) {
            if (i>0){
                arr2.push(i);
            }
        }
        if (numb<0) {
            return 'false';
        }
        else if (numb>0) {
            return 'true';
        }
    }
        else if(typeof numb !== 'number'){
            throw new Error ('parameter type is not a Number');
        }
    }



console.log(isPositive(3));
