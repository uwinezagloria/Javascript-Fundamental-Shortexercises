export function findAverage(array: number[]): number {
 
  return array.length>0?(array.reduce((acc,curr)=>acc+curr,0))/array.length:0;
}