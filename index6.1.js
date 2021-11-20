// Mumbling
function mumbling(string) {
  return string
    .split("")
    .map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i))
    .join("-");
}
console.log(mumbling("abcd"));
console.log(mumbling("RqaEzty"));
console.log(mumbling("cwAt"));
