//sourced info from
//http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/
var unique = module.exports = function(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
      for(var j = i + 1; j < array.length; j++)
            if (array[i] === array[j]) j = ++i;
      newArr[newArr.length] = array[i];
    }
    return newArr;
}; 