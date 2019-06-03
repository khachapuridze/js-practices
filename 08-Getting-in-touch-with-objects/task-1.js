// # Task 1

// Create object `person` with only one property `salary`. During reading this property,
//  need to return string with text. If more than 20 days are left until the end of the month, the string 
//  `good salary` is returned, and if not - the ` bad salary`.

// Example:

// ```javascript
// person.salary;
// ```


const person = {
    get salary() {
        const today = new Date();
        const day = today.getDate();
        const month = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
         if (month - day>20){
             return 'good salary';
         }
         else {
             return 'bad salary';
         }
    },
};

console.log(person.salary);
