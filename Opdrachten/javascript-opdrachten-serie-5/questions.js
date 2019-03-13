/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function (text) {
  return text.length
}

// Replace the first word in the chain to a C
var ReplaceThis = function (text) {
  text = "C" + text.slice(text.indexOf(" "));
  return text
}

// Concatenate the two strings
var ConcatString = function (text1, text2) {
  return text1 + text2
}

// Display the fifth character of the string
var DisplayChar5 = function (text) {
return text[4]
}

// Display the first 9 characters
var DisplayChar9 = function (text) {
  return text.slice(0,9)
}
// Capitalize the string

var CapitalString = function (text) {
  return text.toUpperCase()
}

// Put the string in lowercase
var MinimalizeString = function (text) {
  return text.toLowerCase()
}

// Delete spaces before and after the chain
var SupprEspaceString = function (text) {
  return text.trim()
}

// Show true if the input parameter of the function is of type string
var IsString = function (text) {
  if (typeof text === "string"){
    return true;
  }
}

// Display the file extension
var ExtensionString = function (text) {
  return text.split('.').pop(); // The pop() method removes the last element of an array, and returns that element.
}

// Count the number of spaces in the chain
var NumberEspaceString = function (text) {
  var length = text.split(" ").length - 1;
  return length
}

// Reverse a string of characters
var InverseString = function (text) {
      return text.split("").reverse().join("");
}

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

 // Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function (x, y) {
    return Math.pow(x, y)
}

// Display the absolute value of a number
var ValueAbsolute = function (number) {
    return Math.abs(number)
}

// Display the absolute values of several numbers
var ValueAbsoluteArray = function (array) {
  return array.map(x => Math.abs(x))
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function (radius) {
  return Math.ceil(radius * radius * Math.PI)
}

// Calculate the hypothenuse (schuine zijde van driehoek) of a rectangular triangle
var Hypothenuse = function (ab, ac) {
  return (ab**2 + ac**2)**0.5 // 0.5 is voor de vierkantswortel te berekenen
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function (weight, height) {
  return parseFloat((weight / (height * height)).toFixed(2)) // parseFloat zet een string om naar een komma getal
}
