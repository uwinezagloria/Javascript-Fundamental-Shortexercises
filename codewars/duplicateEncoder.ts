export function duplicateEncode(word: string){
     word= word.toLowerCase()
  let result=""
   let obj: { [key: string]: number } = {}
  for(let str of word){
    obj[str]=word.split(str).length-1
    
  }
  for(let str of word){
    (obj[str]>1)? result+=")" :result+="("
    
  }
 return result
}