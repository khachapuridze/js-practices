const getCustomers = (customers, countries) => {
    
    const promise = new Promise((resolve, reject) => {
        filtered = customers.filter(customer => customer.verified)
        .map(customer=>{
            finded = countries.find(country=>country.id === customer.id)
            if(finded)  {
                merged = {...customer, ...finded} ;
                return merged;
            }
            else {
                reject("didn't find anything");
            }
        })
        resolve(filtered)
    }) 

    return promise;
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
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))