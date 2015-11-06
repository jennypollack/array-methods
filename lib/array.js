
	//frequency2: given an array of
	//english words, figure out what 
	//the most common letter (anywhere 
	//in a word) is.

	//given an array of strings
	function frequency2(array){
		var mostUsedLetter = '';
		var nextLetter = ''; 
		var letterObject = {}; 
		for(var i = 0; i < array.length; i++){
			 letterObject[array[i]] = 0;
		}
		return letterObject; 
	}

	var freqTest1 = ['Jenny', 'node', 'name']; 
	//should be n with 4
	console.log(frequency2(freqTest1)); 