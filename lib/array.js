//re-implement: 
//Push, 

var testPush = [1, 2, 3]; 
console.log(testPush);

function push(array, item){
	array[array.length] = item; 
}

push(testPush, 4); 
console.log(testPush)
console.log('end test push'); 

//Pop, 
var testPop = [1, 2, 3]; 
console.log(testPop); 
function pop(array){
	var item = array[array.length];
	array.length--; 
	return item; 
}
pop(testPop);
console.log(testPop)
console.log('end test pop'); 


//Shift, 


//and Unshift for Array.prototype,
var testUnshift = [1, 2, 3]; 
console.log(testUnshift); 

function unshift(array, item){
	for(var i = array.length -1 ; i >= 0; i--){
		array[i+1] = array[i]; 
	}
	array[0] = item; 
}

unshift(testUnshift, 4); 
console.log(testUnshift);
console.log('done testing unshift'); 
//without using any library functions. can use .length


//unique: implement a function called unique. 
//It takes an array and returns a copy of 
//the array with all the duplicates removed.
var testUnique = [1, 1, 1, 2]; 
console.log(testUnique); 
function unique(array){
	var newArr = array; 

	for(var i = 0; i < array.length; i++){
		if(array[i] != array[i+1]){
			newArr[i] = array[i]; 
		}
	}

}
unique(testUnique);
console.log(testUnique); 
console.log('done testing unique'); 

//frequency2: given an array of
//english words, figure out what 
//the most common letter (anywhere 
//in a word) is.

//given an array of strings
function frequency2(array){
	var arrayLength = array.length;
	var mostUsedLetter = '';
	var nextLetter = ''; 
	for(var i = 0; i < arrayLength; i++){
		console.log(array[i].length); 
	}
}

var freqTest1 = ['Jenny', 'node', 'name']; 
//should be n with 4
frequency2(freqTest1); 
