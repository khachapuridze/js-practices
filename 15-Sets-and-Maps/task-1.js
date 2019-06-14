class DB {
    constructor() {
        this.database = new Map();
    }

    create(obj) {
      let id = new Date().getUTCMilliseconds().toString();
        if (typeof obj === 'object' || obj) {
            if (typeof obj.name === 'string' && typeof obj.age === 'number' &&  typeof obj.country === 'string' &&  typeof obj.salary === 'number') {
                this.database.set(id, obj);
                return id;
            }
            else {
                throw new Error('Wrong properties');
            }
        }
            else {
                 throw new Error("It's not an object");
            }
    }

    read(id) {
        if (id || typeof id === 'string') {
            if (this.database.has(id)) {
                return this.database.get(id).id=id;
            } 
            else {
                return null;
            }
        }
        else {
            throw new Error('id is non-string');
        }
    }

    readAll(arg) {
        if (arg) {
            throw new Error('a parameter is passed to the readAll method');
        }
        else {
            return Array.from(this.database.values());
        }
    }

    update(id, object) {
        if (!id || typeof id !== 'string') {
            throw new Error('ID must be excisting string');
        }

        if (!object || typeof object !== 'object') {
            throw new Error('Not object');
        }

        if (this.database.has(id)) {
            let res = this.database.get(id);
            this.database.set(id, { ...res, ...object });
            return id;
        } 
        else {
            throw new Error('There is no user');
        }
    }

    delete(id) {
        if (id || typeof id === 'string') {
            if (this.database.has(id)) {
                this.database.delete(id);
                return true;
            } 
            else {
                throw new Error('There is no user');
            }
        } 
        else {
            throw new Error('id is not string');
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
db.update(id, { age: 22 }); // id
db.delete(id); // true

