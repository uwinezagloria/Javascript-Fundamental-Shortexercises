var reversed;
function checkPalindrome(input){
reversed=input.toString().split("").reverse().join("");
if(reversed === input){
    return input +" "+"is a Palindrome";
}
else{
    return input +" "+"is not a palindrome";
}
}
console.log(checkPalindrome("isi"));
console.log(checkPalindrome(23));