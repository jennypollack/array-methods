//remove and return the first element of the array 
var shift = module.exports = function shift(array){
	var item = array[0]; 
	for(var i = 0; i < array.length - 1; i++){ 
		array[i] = array[i+1]; 
	}
	array.length--; 
	return item; 
};