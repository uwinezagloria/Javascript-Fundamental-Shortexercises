function reversing(variable){
    if (!isNaN(variable)){
var rem=0;
 var reverse=0
 var num=variable
 while (num !== 0){
   rem=num%10
   reverse=reverse *10 +rem
  num=Math.floor(num/10)
 }
  
 return reverse
    }
 else{
    return variable.split("").reverse().join("")
 }
}
console.log(reversing(1233))
console.log(reversing("engr"))