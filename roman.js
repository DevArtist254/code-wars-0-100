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

// MM = 1000 + 1000;
// XX = 10 + 10;
// III = 1 + 1 + 1;

function solution(roman) {
  const grouped = [];
  const reg =
    /(?<=^)(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})(?=$)/g;

  let number = roman.split(reg).filter((el) => !(el === ''));

  console.log(number);
  if (/^M/.test(number))
    roman
      .match(/M+/)[0]
      .split('')
      .map((el) => grouped.push(1000));
  if (/CM/.test(number)) grouped.push(900);
  if (/D/.test(number) && !/CD/.test(number)) grouped.push(500);
  if (/CD/.test(number)) grouped.push(400);
  if (
    /C/.test(number) &&
    !/CD/.test(number) &&
    !/CM/.test(number) &&
    !/XC/.test(number)
  )
    roman
      .match(/C+/)[0]
      .split('')
      .map((el) => grouped.push(100));
  if (/XC/.test(number)) grouped.push(90);
  if (/L/.test(number) && !/XL/.test(number)) grouped.push(50);
  if (/XL/.test(number)) grouped.push(40);
  if (
    /X/.test(number) &&
    !/XL/.test(number) &&
    !/XC/.test(number) &&
    !/IX/.test(number)
  )
    roman
      .match(/X+/)[0]
      .split('')
      .map((el) => grouped.push(10));
  if (/IX/.test(number)) grouped.push(9);
  if (/V/.test(number) && !/IV/.test(number)) grouped.push(5);
  if (/IV/.test(number)) grouped.push(4);
  if (/I$/.test(number))
    roman
      .match(/I+/)[0]
      .split('')
      .map((el) => grouped.push(1));
  //.map((el, i, arr) => (arr.length <= 3 ? grouped.push(1) : 'error'));

  /**
   *
   * What are we looking for
   * M - multiple times
   * Depending on the pattern found it will map out what is found
   */
  console.log(grouped);
  return grouped.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('MMMDCXCVII'));

//If someone writes more XXX
