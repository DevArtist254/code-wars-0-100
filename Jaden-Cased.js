/**
 * Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes 
 * from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

//Example:

/**
 * Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 * Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

//Qn
/**
 * 1. How do we interact with each el
 * 2. We don't affect the fisrt word 
 * 3. Then convert the rest to small casing 
 */

const rawData = "How Can Mirrors Be Real If Our Eyes Aren't Real";

function convertToNormalCasing (string) {
const sentence = []

//converting to data structure
const array = string.split(" ");

const firstWord = array.splice(0, 1)

for (let i = 0; i < array.length; i++) {    
    const letters = array[i].split('')

    const lowerCasedLetter = letters.splice(0, 1)[0].toLowerCase()

    const word = `${lowerCasedLetter}${letters.join('')}`

    sentence.push(word);
}

const smallCased = sentence.join(' ')

const fullSentence = `${firstWord} ${smallCased}`

return fullSentence
}

const convertedSentence = convertToNormalCasing(rawData);

/**
 * String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
 */


