// organize strings
const sortLongestString = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(sortLongestString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(sortLongestString("abcdefghijklmnopqrstuvwxyz", ""));
