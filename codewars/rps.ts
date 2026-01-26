export function rps(p1: string, p2: string): string{
  let result:string;
  if(p1===p2){
    result="Draw!"
  } 
  else if((p1==="scissors"&&p2==="paper")||(p1==="paper"&& p2==="rock")||(p1==="rock"&& p2==="scissors")
    ){
    result="Player 1 won!"
  }  
 else{
   result="Player 2 won!"
 }
  
  return result
}