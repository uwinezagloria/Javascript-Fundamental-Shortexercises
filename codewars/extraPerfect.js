function extraPerfect(n){
  let arr=[]
  for(let i=1;i<=n;i ++){
    if(i%2===1){
      arr.push(i)
    }
  }
  return arr
}
extraPerfect(7)