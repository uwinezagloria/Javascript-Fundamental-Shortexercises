function sumTwoSmallestNumbers(numbers) {  
 var first= Number(numbers.splice(numbers.indexOf(Math.min(...numbers)),1).join(" "))
var second=Number(numbers.splice(numbers.indexOf(Math.min(...numbers)),1))
return first+second
}