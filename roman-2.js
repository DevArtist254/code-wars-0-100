/**
 * 
1. Loop through each character in the string containing the roman numerals.

2. Compare the value of the current roman symbol with the value of the roman symbol to its right.
        If the current value is greater than or equal to the value of the symbol to the right, 
        add the current symbol’s value to the total.

        If the current value is smaller than the value of the symbol to the right, 
        subtract the current symbol’s value from the total.

 */
/**
 * Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
 */

const romanNum = 'XL';

function romanToInt(roman) {
  let current = 0;
  let prev = 0;
  let result = 0;
  const stateNum = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  const romanArr = roman.split('').reverse();

  for (const char of romanArr) {
    current = stateNum.get(char);

    if (current >= prev) {
      result += current;
    } else {
      result -= current;
    }

    prev = current;
  }

  return result;
}

//The trick reversing and reading the prev result

console.log(romanToInt(romanNum));
