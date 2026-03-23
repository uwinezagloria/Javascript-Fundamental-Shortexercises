export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  let average=(classPoints.reduce((acc,curr)=>acc+curr,0))/classPoints.length;
  return  yourPoints>average?true:false;
}