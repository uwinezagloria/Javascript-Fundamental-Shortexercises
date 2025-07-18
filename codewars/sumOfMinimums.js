function sumOfMinimums(arr) {
  var sum=[]
  arr.forEach((element)=>{
    sum.push((Math.min(...element)))
  })
  return sum.reduce((acc,curr)=>acc+curr,0)
}
sumOfMinimums([[1,2,3],[3,4,5],[7,8,9]])