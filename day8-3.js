

var intArr = function(arr){
    for (i=0; i<arr.length+1; i++){
        // check that each position in the array contains the number that is one greater than the index number, so the first position (0) has a 1 and the second (1) has a 2.
        if (arr[i] / (i+1) != 1){
            // give the next number in the series
            return(i+1)
        }
    }
}
console.log(intArr([1,2,5]))

// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

