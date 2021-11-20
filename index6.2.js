// counting duplicates
function duplicateCount(string, str2) {
  var nstring = string.toLowerCase(); //this changes every character to lower case
  var myObj = {}; // Declaring an empty object
  var counter = 0;
  for (var i = 0; i < nstring.length; i++) {
    // assigning character as property and giving value 1
    if (!myObj[nstring[i]]) {
      myObj[nstring[i]] = 1;
    } //checking if character already added
    else if (myObj[nstring[i]] < 2) {
      myObj[nstring[i]] += 1;
      counter++;
    }
  }
  return counter, str2;
}
console.log(duplicateCount("abcde", "0 no charchters repeats more than once"));
console.log(duplicateCount("aabbcde", "2 # a b"));
console.log(
  duplicateCount("aabBcde", "2 # a occurs twice and b twice (b and B)")
);
console.log(duplicateCount("indivisibility", "1 i six times"));
console.log(
  duplicateCount("Indivisibility", "2 i occurs seven times and s occurs twice")
);
console.log(duplicateCount("aA11", "2 a and 2 1"));
console.log(duplicateCount("ABBA", "2 A and B each occur twice"));
