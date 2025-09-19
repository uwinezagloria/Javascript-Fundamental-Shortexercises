const duplicateCount=(text)=>{
  let obj={}
let arr=[]
   let  count=0
  for(let str of text){
    arr.push(str)
    for(let elem of arr){
      if(str.toLowerCase()===elem.toLowerCase()){
      count++
    }
      obj[str.toLowerCase()]=count
    }
  count=0
  }
  return(Object.values(obj)).filter((n)=>n>1).length 
}