export function partsSums(ls: number[]): number[] {
let array=ls;
let result=[];
while (array.length!==0){
result.push(array.reduce((acc,curr)=>acc+curr,0))
array.shift()
}
 result.push(0)
 return result
}