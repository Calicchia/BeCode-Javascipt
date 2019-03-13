
// Create a array containing "Html", "CSS", "Java", "PHP"
var CreationArrayLanguages = function () {
  var talen = ["Html", "CSS", "Java", "PHP"];
  return talen
}

// Create a array containing the numbers from 0 to 5
var CreateArrayNumbers = function () {
  var numbers = [0, 1, 2, 3, 4, 5];
  return numbers
}

// Replace the third element of the array with "Javascript"
var languages = ["Html","CSS","Java","PHP"];
var ReplacementElement = function (languages) {
  languages[2]="Javascript";
  return languages
}
// Add "Ruby" and "Python" at the end of the array
var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
var AddElementLanguages = function (languages) {
 languages.push("Ruby", "Python"); // The push() method adds new items to the end of an array, and returns the new length.
 return languages
}

// Add "-2" and "-1" at the beginning of the table numbers
var numbers = [0,1,2,3,4,5];
var AddElementNumbers = function (numbers) {
  numbers.unshift(-2,-1); // The unshift() method adds new items to the beginning of an array, and returns the new length.
  return numbers
}

// Delete the first element of the languages array
var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeletingFirstElement = function (languages) {
  languages.shift(); // The shift() method removes the first item of an array.
  return languages
}

// Delete the last element of the languages array
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeleteLastElement = function (languages) {
  languages.pop();
  return languages
}

// Make the "social_networks_chain" chain into a "social_networks" array
var social_networks_chain = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
var ArrayStringConversion = function (social_networks_chain) {
  let array = social_networks_chain.split(',');
  return array
}

// Make the "languages" array into a "languages_chain" string. Separate languages with a comma
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
var ChainArrayConversion = function (languages) {
  let x = languages.join(",");
  return x
}

// Sort the "social_networks" array in alphabetical order
var social_networks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
var SortingArray = function (social_networks) {
  let sort = social_networks.sort();
  return sort
}

// Bonus: Reverse the "languages" array
var languages = ['CSS','Javascript','PHP','Ruby'];
var ReverseArray = function (languages){
  let reverse = languages.reverse();
  return reverse
}
