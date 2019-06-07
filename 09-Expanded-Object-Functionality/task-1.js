Object.defineProperty(Object.prototype, 'extend', {
    value(item) {
        for (let arg of Object.keys(item)) { 
            if (!this.hasOwnProperty(arg)) {                
                Object.defineProperty(this, arg, Object.getOwnPropertyDescriptor(item, arg));
            } 
        }
    }
});

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); 
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); 