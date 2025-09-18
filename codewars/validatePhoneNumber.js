/* Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false 
*/
const validPhoneNumber=(phoneNumber)=> {
   let rest=phoneNumber.slice(phoneNumber.indexOf(")")+1)
  let close=phoneNumber.indexOf(")")
  let first=phoneNumber.slice(phoneNumber.indexOf("("),phoneNumber.indexOf(phoneNumber[close+1]))
  
  if(close===-1)return false
  if(phoneNumber[close+1]!==" ")  return false
  if(!phoneNumber.startsWith("("))return false
  if(rest.indexOf("-")===-1)return false
 let start=rest.slice(rest[0],rest.indexOf("-"))
  let end=rest.slice(rest.indexOf("-")+1)
 return  rest.length===9 &&start.length===4 && end.length===4 &&first==="(123)"?true:false
}

