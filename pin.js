/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

function validatePIN(pin) {
  //check if it's a number and more has more the four values
  //check if the number is not more 9999
  //return true or false

  return !(pin.length === 5) && pin.length >= 4 && pin.length <= 6
    ? /^(?:[0-9][0-9]{5}|[0-9][0-9]{4}|[0-9][0-9]{3}|[0-9][0-9]{2}|[0-9][1-9]|[1-9])$/.test(
        pin
      )
    : false;
}

console.log(validatedPIN('123'));

function validatedPIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
