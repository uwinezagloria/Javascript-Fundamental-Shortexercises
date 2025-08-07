function seven(m) {
   var num=m.toString().split("")
   var nbr= [];
   var steps=0;
  var results=[];
   num.forEach((n)=>nbr.push(Number(n)))
   var lastDigit=nbr[nbr.length-1]
  var n=Number(nbr.join(""))
   while(nbr.length>2){
     steps++;
     nbr.pop()
     n=Number(nbr.join(""))-(2*lastDigit)
     nbr = n.toString().split("").map(Number);
      lastDigit=nbr[nbr.length-1]
   }
   results.push(n,steps)
   return results
   
}
console.log(seven(1603))
console.log(seven(371))
console.log(seven(477557101))