const Worker =class{
    constructor(name,surname,rate,days){
        this._name=name;
        this._surname=surname;
        this._rate=rate;
        this._days=days;
    }
        getName(){
            return this._name;
        }
        getSurnname(){
            return this._surname;
        }
        getRate(){
            return this._rate
        }
        getDays(){
            return this._days
        }
        getSalary(){
            return this._rate * this._days;
        }
}

const worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurnname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
