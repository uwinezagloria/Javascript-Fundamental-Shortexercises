const factorial=(n)=>{
  if(n=== 0){
    return 1
  }
  let fact=1
  while(n!==0){
    fact *=n
     n--
  }
 return fact
}