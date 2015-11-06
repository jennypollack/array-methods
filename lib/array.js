


	//Shift, 
	var testShift = [1, 2, 3];
	console.log(testShift); 
	function shift(array){

	}
	shift(testShift);
	console.log(testShift);
	console.log('done testing shift'); 


	//unique: implement a function called unique. 
	//It takes an array and returns a copy of 
	//the array with all the duplicates removed.
	var testUnique = [1, 1, 1, 2]; 
	console.log(testUnique); 
	function unique(array){
		var newArr = array; 

		for(var i = 0; i < array.length; i++){
			if(array[i] == array[i+1]){
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
