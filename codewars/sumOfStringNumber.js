function sumOfIntegersInString(s) {
  let digits=["0","1","2","3","4","5","6","7","8","9"]
let numbers=[];
  let current=""
for(let str of s){
if(digits.includes(str)){
  current+=str
}
  else{
    if(current !==" "){
      numbers.push(current)
      current=" "
    }
  }
}
  if(current !==" "){
    numbers.push(current)
  }
return numbers.map((num)=>Number(num)).reduce((cur,acc)=>cur+acc ,0)
}