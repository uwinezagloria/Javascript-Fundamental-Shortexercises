
function capitalizing(word){
    var final=[];
    var arr=word.split(" ")
for(let i=0;i<arr.length;i++){
let newArr=arr[i].split("")
let firstLetter=newArr.shift()
let capital=firstLetter.toUpperCase()
let remaining=newArr.join("")
final.push(capital+remaining)
}
return final.join(" ");
}
console.log(capitalizing("hello World"));
console.log(capitalizing("uwineza gloria is a student"));