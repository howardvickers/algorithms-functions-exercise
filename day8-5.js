var pigLatin = function(rawText){
    // create a string for the final sentence 
    var finalSent = ''
    // convert original sentence into array of strings (words)
    var textArr = rawText.split(' ')
    // iterate through each string (word) in the array
    for (var i=0; i<textArr.length; i++){
        // create new string for changed (translated) word
        var changedWord = textArr[i].concat(textArr[i][0]+'ay ').slice(1).toLowerCase()
        // add each word in turn to the final sentence
        finalSent += changedWord      
    }
    return(finalSent)
}

// I'm not sure how to make first letter of first word capitalized

console.log(pigLatin("The quick brown fox"))

// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".

// (source: https://adriann.github.io/programming_problems.html)

