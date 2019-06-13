class DB {

    constructor(){
        
    }

    create(obj) {
        obj = new Map();
        
        var timestamp = new Date().getUTCMilliseconds();
        if(typeof obj === 'object'){
            obj.set('id',timestamp);
            return obj;
        }
        else{
            throw new Error("It's not an object");
        }
        
    }

    read(id){
        let user = new Map();
        if(!id){
            throw new Error('Empty');
        }
        // if(typeof id !== 'string'){
        //     throw new Error ("Not a string");
        // }
        if(user.get(id) == id){
            return true;
        }
        else {
            return null;
        }
    }

    readAll(arg){

        if(arg){
            throw new Error('no need arguments');

        }
        else{
            // return obj;
        }
    }
}

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const db = new DB();
const id = db.create(person);
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll();
