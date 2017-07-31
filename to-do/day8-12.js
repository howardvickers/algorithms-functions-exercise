var sampleText = "Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur."
// convert all characters to lowercase 
var sampleTextLen = sampleText.length
// console.log(sampleTextLen)

var lowerText = sampleText.toLowerCase()
// create an array with each element being each of the characters - this includes spaces, so need to remove these in future
var arrText = lowerText.split('')
// console.log(arrText)

// create a second array for the pairs of elements (letters) - note that there will be duplicates that will be removed 
var arrText2 = []
// populate this new array with the pairs of adjacent elements
for (var i=0; i<arrText.length; i++){
    arrText2.push(arrText[i]+arrText[i+1])
    // console.log(arrText2)
}

// create a dictionary with array pairs becoming the (unique) keys; the values will be the frequency counts
var textDict = {}
// count the total number of occurances for all array pairs
var totalCounter = 0
for (var i=0; i<sampleText.length; i++){
    // check if pair-element is already in the dictionary as a key
    if (textDict[arrText2[i]]){
        // add ...
        textDict[arrText2[i]]++
        totalCounter +=1
    } else {
        // set the first occurance of the pair-element as a key with value of 1
        textDict[arrText2[i]] = 1
    }
    // console.log(textDict)
}
// console.log(totalCounter)



for (var prop in textDict){
    if (textDict[prop] < 10) {
        // textDict[prop] = 1000
        delete textDict[prop]
        console.log(textDict)
    } 
    // else {
        // textDict[prop] = (textDict[prop]/totalCounter*100).toFixed(2)
    // }
    // convert absolute frequency count values into percentages to 2 decimal places   
}
// console.log(textDict)



// create a new dictionary for the top ten array pairs
// var top10Dict = {}

// for (var prop in textDict){
//     if (textDict[prop] > 1.2){
//         top10Dict.set(prop, textDict[prop])
//     }
// }
// console.log(top10Dict)

// for (var [key, value] of Object.entries(textDict)) {
//     if 
//     console.log(key + ' ' + value) // "a 5", "b 7", "c 9"
// }



// 12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

// Example output:
// th 2.37%
// in 2.20%
// fj 2.00%
// ...


// /*(source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits. */
