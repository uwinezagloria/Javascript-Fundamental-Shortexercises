function add(num1, num2) {
   let result=""
  let n1=String(num1).split("")
  let n2=String(num2).split("")
if(n1.length>n2.length){
  n2.unshift("0".repeat(n1.length-n2.length))
}
 if(n2.length>n1.length){
   n1.unshift("0".repeat(n2.length-n1.length))

 } 
  for(let i=n1.length-1;i>=0;i--){
    result+=String(Number(n1[i])+Number(n2[i])).split("").reverse().join("")
  }
  return Number(result.split("").reverse().join(""))
}