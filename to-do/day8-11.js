
var encodeSquare = function(initString) {
    for (i=0; i<initString.length; i+=4){
        var matrix1 = initString.slice([i],[i+5])
    }
    
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
