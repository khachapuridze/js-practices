const Validator = class{
    constructor(){

    }
  
    isEmail(email) {
        var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }
    isDomain(domain) {
        var res = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
        return res.test(String(domain).toLowerCase());
    }
    isDate(date) {
        var res = /([0-9]{2}[\./]){2}[0-9]{4}/;
        return res.test(date);
    }
    isPhone(phone) {
        let re = /^\+([0-9]+)+\s+\([0-9]+\)+\s+([0-9]+-[0-9]+-[0-9])+[0-9]/;
        return re.test(String(phone).toLowerCase());
    }
  
  }
  
  

  var validator = new Validator();
  
  console.log(validator.isEmail('jshtml@mail.ru'));
  console.log(validator.isDomain('jshtml.net'));
  console.log(validator.isDate('12.05.2020'));
  console.log(validator.isPhone('+995 (29) 817-68-92'));
