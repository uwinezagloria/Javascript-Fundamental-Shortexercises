 //squaring every digit 
 function squareDigits(num){
   return Number(num.toString().split("").map((num)=>Number(num)*Number(num)).join(""))
}
console.log(squareDigits(2334)) //output:49916