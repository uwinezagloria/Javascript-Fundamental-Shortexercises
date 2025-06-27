function wordSearch(query, seq){
  var arr=[]
  seq.forEach((element)=>{
    if(element.includes(query)){
      arr.push(element)
    }
  })
 return arr 
}
console.log(wordSearch("me",["merry","home","cook"]))