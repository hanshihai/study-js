function alternate(arg) {
	var switcher = true;
	var message = "";

	return function() {
		if(switcher) {
			message = arg(message);
			switcher = false;
		}else{
			switcher = true;
		}
		return message;
	}
}


var sayHeyOnAlternateCalls = alternate(function(argIn) { 
      argIn += "hey";
	  return argIn;
    });