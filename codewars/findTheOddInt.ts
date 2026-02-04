export const findOdd = (xs: number[]): number => {
  let obj:Record<number,number>={}
let count=0
let result=[]
for(let elem of xs){
  if(obj[elem]){
    obj[elem]++
  }
  else{
    obj[elem]=1
  }
}
for(let item in obj){
  if(obj[item]%2!==0){
    result.push(item)
  }
}
 return Number(result.join(""));
}