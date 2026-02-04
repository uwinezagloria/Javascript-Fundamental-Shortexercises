export const reverseSeq = (n: number): number[] => {
  let result=[]
  for(let i=1;i<=n;i++){
    result.push(String(i))
  }
  return result.reverse().map(Number)
};