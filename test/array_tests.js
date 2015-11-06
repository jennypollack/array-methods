'use strict'; 

var expect = require('chai').expect; 
var array = require(__dirname + '/../lib/array');
var pusher = require(__dirname + '/../lib/push');
var popper = require(__dirname + '/../lib/pop');
var unshifter = require(__dirname + '/../lib/unshift');
var shifter = require(__dirname + '/../lib/shift');

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
	it('should shift', function(){
		var testShift = [1, 2, 3];
		expect(shifter(testShift)).to.eql(true); 
	});
});

describe('unshift function', function(){
	it('should ', function(){
		var testUnshift = [1, 2, 3]; 
		expect(unshifter(testUnshift, 4)).to.eql([4, 1, 2, 3]);
	});
});


