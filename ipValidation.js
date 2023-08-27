/**
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
 * IPs should be considered valid if they consist of four octets, with values between 0 and 255,
 * inclusive.
 */

/**
 * Examples of valid inputs:
    1.2.3.4
    123.45.67.89
 */

/**
 * Invalid input examples:
  1.2.3
  1.2.3.4.5
  123.456.78.90
  123.045.067.089
 */

//01.02.03.04

/**
 * Rules
 * Should only be single digits
 * With a max of three digits
 * 4 sets of numbers
 * 3 dots
 * Each of these numbers can be 0 - 255
 */

//\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b
