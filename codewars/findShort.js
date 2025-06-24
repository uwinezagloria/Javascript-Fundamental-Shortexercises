//length  of the shortest word in the string
function findShort(s){
    let arr= s.split(" ")
     return arr.reduce((first,second)=>{
        return first.length<second.length ? first:second;
    }).length
    
}
console.log(findShort("my names are"))