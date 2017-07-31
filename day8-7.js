var cutOff = function(arr1,limit1){
    for (i=0; i<arr1.length; i++){
        // check if each element is greater than the limit
        if (arr1[i]>limit1){
            // replace the element (that is greater than the limit) with the limit itself
            arr1[i]=limit1
        }
    }
    return(arr1)
}
console.log(cutOff([1,5,7,3,1,5,7], 3))

// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
