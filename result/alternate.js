var switcher = true;
var message = "";

function alternate(arg) {
	return function() {
		if(switcher) {
			arg();
			switcher = false;
		}else{
			switcher = true;
		}
		return message;
	}
}


var sayHeyOnAlternateCalls = alternate(function() { 
      message += "hey";
    });