var pop = module.exports = function pop(array){
	var item = array[array.length-1];
	array.length--; 
	return item;
};
