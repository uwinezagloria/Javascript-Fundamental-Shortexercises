export function noSpace(x:string):string {
   let result:string[]=[];
   for (let elem of x){
    if (elem !==" "){
      result.push(elem)
    }
  }
  return result.join("")
}