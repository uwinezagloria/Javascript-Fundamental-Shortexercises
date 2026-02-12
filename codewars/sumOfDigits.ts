export const digitalRoot = (n:number):number => {
  let arr=String(n).split("").map(Number)
  while(arr.length!==1){
    arr=String(arr.reduce((acc,curr)=>acc+curr,0)).split("").map(Number)
  }
 
  return Number(arr.join(""))
};