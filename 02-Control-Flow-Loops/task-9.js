let a,b;

for (a = 2 ; a < 10; a++) {
   let condition = true;
   for (let b = 2; b < a; b++) {
       if(a % b == 0){
            condition = false;
           break;
       }
   }
   if(condition == true){
       console.log(b);
   }
}


