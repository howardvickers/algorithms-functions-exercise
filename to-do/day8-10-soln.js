//I DON'T UNDERSTAND THIS QUESTION!!!!!!!!!!!!!!!!!!

var numbers = [1, 5, -4, 3, 2, -3]
var largestSubArray = function(inputArr, subSize){
    var start = 0
    for (var i=0; i<inputArr.length - subSize; i++) {
        for (var k=start; k< start+subSize; k++) {
        console.log(i)
        }
    }
}
largestSubArray(numbers, 3)



// 10. Write a function which, given an array, determines the subarray with the largest sum.

// [1, 1, 1, -1] -> [1, 1, 1]
// [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// [2, 2, -10, 5, -10, 2, 2] -> [5]
// [1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]

// (Source: http://venus.cs.qc.edu/~ryba/cs111/Array.pdf with edits, which may no longer be accessable)

