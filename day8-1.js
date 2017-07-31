// creat empty dictionary to hold the array's elements as keys and their frequency count as values
var modeDict = {}

// define array as array of numbers
var modeArr = [1]
    // iterate through array
    for (i=0; i<modeArr.length; i++){
        // populate the dictionary with keys and also count frequency adding to 
        // determine if element in array is already a key in the dictionary
        if (modeDict[modeArr[i]]){
            // add to the count for the value.  Note alternative forms: modeDict[modeArr[i]] = modeDict[modeArr[i]] +1 = modeDict.modeArr[i]++
            modeDict[modeArr[i]]++
        } else {
            // set value initially to 1 if element not already in dictionary as a key
            modeDict[modeArr[i]] = 1
        }
    }
    // console.log(modeDict)

// create variables to track the key and value for maximum value while iterating through the dictionary created above
var currentMaxValue = 0
var currentMaxKey = 0
for (var prop in modeDict) {
    // is the value (ie number of times element appears in array) greater than the currentMaxValue?
    if (modeDict[prop] > currentMaxValue){
        // if so, set it equal to the value 
        currentMaxValue = modeDict[prop]
        // set the currentMaxKey to be the prop (since prop is another word for key)
        currentMaxKey = prop
    }
}
console.log(currentMaxKey)

// this is another way to do this last section, that I found on the web
// var max = Object.keys(modeDict).reduce(function (prevVal, nextVal){
//     return modeDict[prevVal] > modeDict[nextVal] ? prevVal : nextVal; 
//     })
// console.log(max)



// 1. Write a function which takes an array of numbers and returns the mode of that array.
// [2, 4, 4, 4, 6, 6, 1] - > 4
// [0, 0, 0, 10] -> 0
// [1] -> 1