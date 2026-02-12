export function solve(s: string): string {
   let result:string;
   let uppercase=s.split("").filter((elem)=>elem===elem.toUpperCase())
    let lowercase=s.split("").filter((elem)=>elem===elem.toLowerCase())
  if(lowercase.length===uppercase.length || lowercase.length>uppercase.length){
    result=s.toLowerCase()
  }
  else{
      result=s.toUpperCase()
  }

  return result;
}