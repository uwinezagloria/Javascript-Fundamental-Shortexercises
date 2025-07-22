function sumMix(x){
var arr=[]
x.forEach((num)=>{
  arr.push(Number(num))
})
return arr.reduce((acc,curr)=>acc+curr,0)
}
sumMix([1,2,3,"3",4,"27"])