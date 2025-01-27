//*Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.
//*Explain & TIP:* To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello"));
console.log(areStringsEqualIgnoreCase("world", "Word"));
