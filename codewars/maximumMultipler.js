function maxMultiple(divisor, bound){
  let n=[];
  for(let i=1;i<=bound;i++){
  if(i%divisor=== 0){
    n.push(i)
  }
  }
  return Math.max(...n)
}