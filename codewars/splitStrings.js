
/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/
function solution(str){
    let result=[]
   let arr=str.split("")
   while (arr.length>1){
     let remove= arr.splice(0,2)
      result.push(remove.join(""))
   }
  if(arr.length !== 0){
    result.push(arr[0]+"_")
  }
   return result
}