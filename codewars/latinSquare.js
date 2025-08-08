function makeLatinSquare(n) {
  var results=[]
  for(let i=1;i<=n;i++){
    var arr=[]
    for(let j=i;j<=n;j++){
     arr.push(j)
    }
    for(let k=1;k<i;k++){
      arr.push(k)
    }
    results.push(arr)
  }
  
  return(results)
} 