/* Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5 */
const encode=string=> {
   const character={  a:1,e:2,i:3,o:4,u:5};
  let result=""
 for(let  str of string){
   character[str]?result+=character[str]:result+=str ;
 }
 return result
}

const decode=string=> {
     const character={  "1":"a","2":"e","3":"i","4":"o","5":"u"};
  let result="";
  for(let str of string){
    character[str]?result+=character[str]:result+=str;
  }
  return result
}