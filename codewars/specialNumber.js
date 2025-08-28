/*A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5

Given a number, determine if it is a special number or not.*/
function specialNumber(n){
  n=n.toString()
n= n.split("").map((num)=>Number(num))
return n.find((n)=>n>5)?"NOT!!" :"Special!!"

}