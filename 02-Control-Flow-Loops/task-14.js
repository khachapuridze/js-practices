var list = [1, 2, 5, 9, 4, 13, 4, 10];

for (var i of list){
    if(i == 4){
        console.log('Exists!');
        break;
    }
    else{
        console.log('');
    }
}
