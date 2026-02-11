export function toCamelCase(str:string):string{
  let result="";
  for(let i:number=0;i<str.length;i++){
    if(str[i]==="-" || str[i]==="_"){
      if(str[i+1]){
        let a:string=str[i+1].toUpperCase()
      result+=a
        i++
      }
      
    continue;
    }
    result+=str[i]
  }
return result
} 