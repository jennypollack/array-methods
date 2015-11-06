var push = module.exports = function push(array, item){
	array[array.length] = item; 
	return array;
};