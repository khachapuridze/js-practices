function f(numb) {
    if(typeof numb === 'number'){
        if(numb>0 && numb<8){
            switch(numb){
                case 1:
                    res = 'ორშაბათი';
                    break;
                case 2:
                    res = 'სამშაბათი';
                    break;
                case 3:
                    res = 'ოთხშაბათი';
                    break;
                case 4:
                    res = 'ხუთშაბათი';
                    break;
                case 5:
                    res = 'პარასკევი';
                    break;
                case 6:
                    res = 'შაბათი';
                    break;
                case 7:
                    res = 'კვირა';
                    break;   
            }
            return res;
        }
        else {
            throw new Error ('parameter should be in the range of 1 to 7');
        }
    } 
    else if (typeof numb !== 'number' ){
        throw new Error ('parameter type is not a Number');
    }
}

console.log(f(7));