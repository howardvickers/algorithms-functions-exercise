var singlz = function(arr){
        // start with the initial element and then (below) compare each of the other elements with it in turn
    for (i=0; i<arr.length; i++){
            // iterating through the other elements 
        for (k=1; k<arr.length; k++){
                // checking each other element with the i-th element
            if (arr[i] === arr[k]){
                // remove a single element at the k-th position
                arr.splice([k],1)
            }
        }
    }
    console.log(arr)
}
console.log(singlz([1,4,4,4,2,2,4,4,4]))
// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]
