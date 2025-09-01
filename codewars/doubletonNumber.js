
/* We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.*/
function doubleton(num){
   for(let i=num+1; i<100000;i++){
      let set=new Set(String(i))
     if(set.size===2){
       return i
     }
   }
}  