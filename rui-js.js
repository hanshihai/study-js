
# function interleave result:

function interleave() {
var i, j = 0, maxLength = 0, result = "", numargs = arguments.length;
        
	for (i = 0; i < numargs; i++) {
		if(arguments[i].length > maxLength){
			maxLength = arguments[i].length;
		}
	}
	
	for(j = 0; j < maxLength; j++) {
		for (i = 0; i < numargs; i++) {
			if(j < arguments[i].length) {
				var singleChat = arguments[i].charAt(j);
				result += singleChat;
			}
		}
	}
	
	return(result);
}


# function alternate result:

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
	

# function twice result:

var count = 0;
var maxCount = 2;

function twice(arg) {
	return function() {
		count++;
		if(count <= maxCount) {
			return arg();
		}else{
			return 0;
		}
	}
}


var returnTen = twice(function() { 
      return 10;
    });
	
	var total = 0;
	total += returnTen();
    total += returnTen();
    total += returnTen();
    total += returnTen();  
    calledMoreThanTwoTimes = returnTen();
	

	
# fucntion createFunctions result:

function createFunctions(arg) {
	var count = 0;
	var result = new Array(arg);
	for(var i = 0; i < arg; i++) {
		result[i] = function() {
			if(count >= arg) {
				count = 0;
			}
			return count++;
		}
	} 
	return result;
}


var callbacks = createFunctions(10);

var onlyFuncs = callbacks.every(function(fn){
      if(typeof fn === 'function'){
        return true;
      }
    });

    var returnValsForEachFunc = callbacks.map(function(fn){
      return fn();
    });
    var callFunctionsMoreThanOnce = callbacks.map(function(fn){
      return fn();
    });
	

# function reduce_right result:

## part 1 -- concat
    var string_concat = function(prev,curr){
      return prev+curr;
    };
	
function reduceRight() {
	var array_in = arguments[0];
	var in_2 = arguments[1];
	var function_in = arguments[2];
	
	var result = "";
	for(var i=array_in.length; i > 0; i = i-2) {
	if(typeof array_in[i-2] != 'undefined') {
		result += function_in(array_in[i-1], array_in[i-2]);
	}else{
		result += function_in(array_in[i-1], '');
	}
	}
	
	return result;
}

var reducedResult = reduceRight(['o','l','l','e','h'], '', string_concat)

## part 2 -- statistics

function reduceRight() {
	var array_in = arguments[0];
	var in_2 = arguments[1];
	var function_in = arguments[2];
	
	var result = {};
	
	for(var i=0;i<array_in.length;i++) {
		result = function_in(result, array_in[i]);
	}
	
	return result;
}



var words = ['I', 'wish', 'to', 'wish', 'the', 'wish', 'you', 'wish', 'to', 'wish'];
    var reducedResult = reduceRight(words, {}, function (wordFrequencyObj, word) {
      if (wordFrequencyObj[word] === undefined) {
        wordFrequencyObj[word] = 1;
      } else {
        wordFrequencyObj[word]++;
      }
      return wordFrequencyObj;
    });


# function key adder result:

	
	function keyAdder() {
	var result = 0, map_in = this;
	for(var key in map_in) {
		var value = map_in[key];
		if(!isNaN(value)){
			result += value;
		}		
	}
	return result;
}

var total = keyAdder.call({a1:4, a2:22, a3:[1,2,3], a4:"Fullstack", a5:10});
