/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 which is the number of times you must multiply the digits in num until you reach a single digit.
*/
function persistence(num) {
    if(num.toString().length===1){
   return 0
 }else{
   var count=1
    var prod= num.toString().split("").reduce((acc,curr)=>Number(acc*curr),1)
  while(prod.toString().length!==1) {
    prod= prod.toString().split("").reduce((acc,curr)=>Number(acc*curr),1)
  count++  
  }
 
  return count
 }
}
persistence(123)