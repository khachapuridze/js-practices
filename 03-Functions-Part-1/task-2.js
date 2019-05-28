function f(numb){
    let sum = 0;
    for (i of numb) {
        if (typeof i ==='number') {
            sum=sum +i
        }

        else {
            throw new Error ('all parameters type should be a Number');
        }
    }
    console.log(sum);
  
  }
  
  f([1,2,'gdf'])