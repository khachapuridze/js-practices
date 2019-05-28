var a,b;

for (a = 2 ; a < 10; a++) {
   var condition = true;
   for (b = 2; b < a; b++) {
       if(a % b == 0){
           var condition = false;
           break;
       }
   }
   if(condition == true){
       console.log(b);
   }
}


