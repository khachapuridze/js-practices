function getCustomers(arg,arg2){
    if([arg === 'object' && arg2 === 'object' && arg.id == arg.id && arg2.verified == true]){
        allargs = {...arg[0],...arg2[0]};
        return Promise.resolve();
    }
    return Promise.reject('error');

}   

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
    },
    {
        id: 'A2',
        name: 'alex',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => allargs = {...customers,...countries})
    .catch(error => console.log(error))

console.log(allargs);

