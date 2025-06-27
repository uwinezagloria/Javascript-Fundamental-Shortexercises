function wordSearch(query, seq){
  var arr=[]
  seq.forEach((element)=>{
    if(element.toLowerCase().includes(query.toLowerCase())){
      arr.push(element)
    }
    
  })
 return arr.length>0 ? arr:["Empty"]
}
console.log(wordSearch("me",["merry","home","cook"]))