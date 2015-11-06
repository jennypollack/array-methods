'use strict'; 

var expect = require('chai').expect; 
var pusher = require(__dirname + '/../lib/push');
var popper = require(__dirname + '/../lib/pop');
var unshifter = require(__dirname + '/../lib/unshift');
var shifter = require(__dirname + '/../lib/shift');
var unique = require(__dirname + '/../lib/unique'); 

describe('push function', function(){
	it('should add an item to the end of the array', function(){
		var testPush = [1, 2, 3]; 
		expect(pusher(testPush, 4)).to.eql([1, 2, 3, 4]); 
	});

});

describe('pop function', function(){
	it('should return the item at the end of the array', function(){
		var testPop = [1, 2, 3]; 
		expect(popper(testPop)).to.eql(3); 
	});
});

describe('shift function', function(){
	it('should remove and return the first element of the array', function(){
		var testShift = [1, 2, 3];
		expect(shifter(testShift)).to.eql(1); 
		expect(testShift.length).to.eql(2); 
	});
});

describe('unshift function', function(){
	it('should add an element to the beginning of the array', function(){
		var testUnshift = [1, 2, 3]; 
		expect(unshifter(testUnshift, 4)).to.eql([4, 1, 2, 3]);
		expect(testUnshift.length).to.eql(4); 
	});
});

describe('unique function', function(){
	it('should return an array without duplicates', function(){
		var testUnique = [1,1,2,2,3];
		expect(unique(testUnique)).to.eql([1,2,3]); 
	});
});

