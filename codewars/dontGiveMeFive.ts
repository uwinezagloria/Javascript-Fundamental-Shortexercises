export function dontGiveMeFive(start:number, end:number) : number
{
  let arr=[];
 for(let i:number=start;i<=end;i++){
 if(String(i).includes("5")){
   continue
 }
 arr.push(i)
 }
 return arr.length
}