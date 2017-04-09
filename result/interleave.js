function interleave() {
var i, j = 0, maxLength = 0, result = "", numargs = arguments.length;
        
	for (i = 0; i < numargs; i++) {
		if(arguments[i].length > maxLength){
			maxLength = arguments[i].length;
		}
	}
	
	for (j = 0; j < maxLength; j++) {
		for (i = 0; i < numargs; i++) {
			if(j < arguments[i].length) {
				var singleChat = arguments[i].charAt(j);
				result += singleChat;
			}
		}
	}
	
	return(result);
}
