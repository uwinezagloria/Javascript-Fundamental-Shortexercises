function descendingOrder(n){
  //...
  return  Number(n.toString().split("").map((elemt)=>Number(elemt)).sort((a,b)=>b-a).join(""))
}
console.log(descendingOrder(123))