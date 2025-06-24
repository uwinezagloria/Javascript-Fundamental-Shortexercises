// Return the nth triangular number
function triangular(n) {
    var arr=[]
    a=n/2
  for(let i=0;i<a;i++){
    
    for(let j=a;j>i;j--){
      arr.push("*")
    }
    console.log(arr.join(""))
    arr=[]
  }
}
console.log(triangular(3))