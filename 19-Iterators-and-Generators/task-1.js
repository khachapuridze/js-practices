
class Customers {
    constructor(){
        this.customers = [];
    }
    add(arg){
        if(typeof arg === 'object'){
        if(arg.verified == true){
            return this.customers.push(arg);
        }
        }
        else{

        }
    }
    
    [Symbol.iterator]() {
        for (const i of this.customers) {
            console.log(i);
        };
      }



}



const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}