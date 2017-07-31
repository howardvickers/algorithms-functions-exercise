var randDif = function(){
    var array = []
    for (i=0; i<10; i++){
        // get a random number (between 0 and 1) from the math library and then multiply by 100 to make between zero and 100, then add 1 to make between 1 and 100
        var randomNum = Math.floor(Math.random() * 100) + 1
        // subtract 1 from any number greater than 100 to bring back within range
        if (randomNum>100){
            randomNum-=1
        }
        // add to array 
        array.push(randomNum)
    }
    return(array)
    
}
console.log(randDif())

// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

