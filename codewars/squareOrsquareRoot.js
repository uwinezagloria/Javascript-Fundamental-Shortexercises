const squareOrSquareRoot=(array)=> {
 let arr=[]
  array.forEach((n)=>{
    if(Number.isInteger(Math.sqrt(n))){
                arr.push(Math.sqrt(n))
               }
               else{
                 arr.push(Math.pow(n,2))
               }
  })
               
  return arr
}