const bind = (arg,link,...n) =>{
    return ()=> arg.call(link, ...n);
}

const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f()); // My name: Pitter