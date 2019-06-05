function CoffeeMachine(power) {
	this.waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	let self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		return 'Coffee is ready';
	}

    this.run = function() {
		timerId =  setTimeout(onReady, getBoilTime());
    };

    this.stop = function(){
        if(timerId){
        clearTimeout(timerId);
        console.log("Coffee isn't ready");
    }
    else{
        throw new Error('timerId is not defined');
    }
    }
}

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.stop();