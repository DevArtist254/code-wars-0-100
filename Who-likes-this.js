/* The like system  */
/* 
 *You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
 We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:
 *
 *[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 * */

//On the first iteration
//Read the first item and return el

//On the second iteration
//Read the first item and return el

const arra = [1, 2, 3, 4, 5]

function likes(){
const arr = []

console.log(arr.length);

//check  if array has 4 or more people
//iteration through it while finding the 1st two elements and and the length of the whole array
if (arr.length >= 4) {
  return `${arr[0]}, ${arr[1]} and ${arr.length + 1} others like this...`
} else if (arr.length === 3) {
  return `${arr[0]}, ${arr[1]} and ${arr[2]} like this...`
} else if (arr.length === 2) {
  return `${arr[0]} & ${arr[1]} like this...`
}else if (arr.length === 1) {
  return `${arr[0]} like this...`
}else if (arr.length === 0) {
  return `no one likes this`
}

}

console.log(likes())

