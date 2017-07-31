


var inputString = "Have a nice day!"

var square = function(input) {


    var root = Math.sqrt(inputString.length)
    if (root !== Math.floor(root)){
        root++
    }

    // console.log(root)
    // inputAsArray = input.split('')

    var output = [ ]
    for (vari=0; i< root; i++){

    }
        [],
        [],
        [],
        []
    ]

    for (var i = 0; i<output.length; i++) {
        for (var k=0; k< 4; k++) {
            output[i].push(inputAsArray.shift())
        }
    }

    // console.log(output)
    for (var i = 0; i <output.length; i++){
        output[i] = output[i].join('')
    }

    for (var i=0; i<output.length; i++)
        return(output[i].join('\n'))
}
console.log(square(inputString))

var result = square(inputString)
console.log(result)

var unsquare = function(input){
    return input.split('\n').join('')
}



// 11. One way of encoding a message is called a "square code". Given a message like:

// "Have a nice day!"

// We determine an appropriate size of a square or rectangle to contain this message without spaces like so:

// have
// anic
// eday
// !

// We then read the square in columns, which gives us our encoded message:

// hae! and via ecy

// Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.

// (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)
