export const encryptThis = (str: string): string => {
  let arr=str.split(" ")
  let result=""
  arr.forEach((elem)=>{
    for(let i:number=0;i<elem.length;i++){
      if(i==0){
        result+=elem.charCodeAt(i)
        continue
      }
       if(i===1){
        result+=elem[elem.length-1]
        continue
      }
       if(i===elem.length-1){
        result+=elem[1]
        continue
      }
      else{
          result+=elem[i]
      }
    
    }
 result+=" "
  
  })
  
  return result.trim()
}