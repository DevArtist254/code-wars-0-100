/**
 * Create a function that takes a Roman numeral as its argument 
and returns its value as a numeric decimal integer.  
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 
2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

solution('XXI'); // should return 21

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
 */

MM = 1000 + 1000;
XX = 10 + 10;
III = 1 + 1 + 1;

function solution(roman) {
  // for (let i = 0; i < roman.length; i++) {
  //   const el = roman[i];

  //   if (el === 'M') {
  //     number.push(1000);
  //   } else if (el === 'D') {
  //     number.push(500);
  //   } else if (el === 'C') {
  //     number.push(100);
  //   } else if (el === 'L') {
  //     number.push(50);
  //   } else if (el === 'X') {
  //     number.push(10);
  //   } else if (el === 'V') {
  //     number.push(5);
  //   } else if (el === 'I') {
  //     number.push(1);
  //   }
  // }

  const reg =
    /(?<=^)M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})(?=$)/gm;
  const number = roman.match(reg);

  return number;
}

console.log(solution('MDCLXVI'));
