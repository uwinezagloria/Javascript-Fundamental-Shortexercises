const findDigit=(num, nth)=> {
  num=Math.abs(num)
  let arr=String(num).split("").reverse().map((num)=>Number(num))
  if(nth<=0){
    return -1
  }
 while(nth>arr.length){
   arr.push(0)
 }
 return arr.find((num,index)=>index===nth-1)

  
}