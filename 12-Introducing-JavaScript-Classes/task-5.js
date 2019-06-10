const Validator = class{
    constructor(){

    }
  
    isEmail(email){
      let valid= /\S+@\S+\.\S+/;
      if(valid.test(email)){
        return true;
      }
      else {
        return false;
      }
  
    }

    isDomain(domain){
        let res = domain.split('');
        if(res.includes('.')){
            return true;
        }
        else{
            return false;
        }

    }


  
    isPhone(phone){
      let res = phone.split('');
      if(res[0] == '995' && res[1].includes('(')){
        return true;
      }
      else {
        return false;
      }
    }
  
  }
  
  

  var validator = new Validator();
  
  console.log(validator.isEmail('jshtml@mail.ru'));
  console.log(validator.isDomain('jshtml.net'));
  // console.log(validator.isDate('12.05.2020'));
  console.log(validator.isPhone('+995 (29) 817-68-92'));