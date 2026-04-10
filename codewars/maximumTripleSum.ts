export function maxTriSum(nums: number[]): number  {
let uniqueNumber=[...new Set(nums)].sort((a,b)=>b-a)
return uniqueNumber[0]+uniqueNumber[1]+uniqueNumber[2]

}
