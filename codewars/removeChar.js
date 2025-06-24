 //removing first and last characters of the string
 function removeChar(str){
let remove= str.split("")
remove.shift()
remove.pop()
return remove.join("")
};
console.log(removeChar("uwineza"))