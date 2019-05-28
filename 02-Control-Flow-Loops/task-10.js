var list =[ 39, 108, 21, 55, 18, 9];



for(i=0; i<1; i++){

    for(j=0; j<list.length; j++){
            if(list[i]<list[j]){
                var x = list[i];
                list[i] = list[j];
                list [j] = x;
               
            }
        }
    
     }
     console.log(list);