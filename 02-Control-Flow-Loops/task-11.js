let list =[ 39, 108, 21, 55, 18, 9];



for(let i=0; i<1; i++){

    for(let j=0; j<list.length; j++){
            if(list[j]<list[i]){
                let x = list[i];
                list[i] = list[j];
                list [j] = x;
               
            }
        }
     }
     console.log(list);