var sameValues = function(arg1, arg2){
    var truFalz = 0
    // ensure both arguments are in same order (needed for line 15-20)
    var sortedValues1 = arg1.sort()
    var sortedValues2 = arg2.sort()
    console.log(sortedValues1, sortedValues2)
    // check if both are empty arrays
    if (arg1 === '' && arg2 === ''){
        truFalz +=1
    }
    // check the length of each argument is same
    if (arg1.length != arg2.length){
        truFalz +=1
    }
    // check if each element in each array is identical to equivalent in other array
        for (i=0;i<sortedValues1.length; i++){
            if (sortedValues1[i] != sortedValues2[i]){
                truFalz +=1
        }
    }
    // check if any of above created a value in truFalz
            if (truFalz>0){
                return(false)
            } else {
                return(true)
            }
}
console.log(sameValues([], []))


// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
