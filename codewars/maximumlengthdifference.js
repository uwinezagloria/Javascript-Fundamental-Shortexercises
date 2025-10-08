const mxdiflg=(a1, a2)=> {
  if(a1.length===0 || a2.length===0){
    return -1
  }
  let min1=a1.sort((a,b)=>a.length-b.length)[0]
let max1=a1[a1.length-1]
let max2=a2.sort((a,b)=>b.length-a.length)[0]
let min2=a2[a2.length-1]
return Math.max(Math.abs(min1.length-max2.length),Math.abs(min2.length-max1.length))
}