function capitalizeOdd(str){
  let arr=[]
  for(let i=0;i<str.length;i++){
    if(i%2 ===1){
       arr.push(str[i].toUpperCase())
    }
    else{
      arr.push(str[i])
    }
  }
  return arr.join("")
}
console.log(capitalizeOdd("uwineza"))
console.log(capitalizeOdd("The quick BROWN fox"))