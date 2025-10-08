const euclideanDistance=(point1, point2)=>{
  if(point1.length !== point2.length){
    return "length of arrrays are not the same"
  }
let distance=0
    for(let i=0;i<point1.length;i++ ){
       distance +=Math.pow((point2[i]-point1[i]),2)
      }
  return Number(Math.sqrt(distance).toFixed(2))
}