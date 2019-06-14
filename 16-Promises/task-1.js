function isCustomerVerified(customer){
    
    if(customer && typeof customer === 'object' && customer.hasOwnProperty("verified") && customer.verified == true){
        return Promise.resolve(true);
    }
    else{
        return Promise.reject("Customer is not verified or empty");
    }

}

const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex',
    verified: true
};

isCustomerVerified(personSecond)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified()
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified