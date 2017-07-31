var sortConcat = function(arr1, arr2){
    // sort each list
    var sorted1 = arr1.sort()
    var sorted2 = arr2.sort()
    // concatonate the lists
    var sortedConcated = sorted1.concat(sorted2)
    // ensure the final list is sorted before returning
    return(sortedConcated.sort())
}
console.log(sortConcat([1,2,5,6,9], [3,4,5,10]))


// 9. Write a function which takes two sorted lists and merges them into a new sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// (Source: https://adriann.github.io/programming_problems.html)


