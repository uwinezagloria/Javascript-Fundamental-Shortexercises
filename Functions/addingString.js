function add(str){
var first=[]
var second=[]
var arr=str.split("")
for(let i=0;i<arr.length;i++){
if(arr[i]==="+" ){

break;
}
else{
first.push(arr[i])

```
}

```

}
for(let j=arr.length-1;j>0;j--){
if(arr[j]==="+"){
break;
}
else{
second.push(arr[j])
}

}
}
return parseInt(first.join("")) + parseInt(second.reverse().join(""))
}
console.log(add("1002+20"))
 //or
 function add(s){
  let a = parseInt(s,10)
  let operator = s.indexOf("-")
  let afterOp= s.substr(operator+1)
  let b = parseInt(afterOp,10)
  return a-b
}

console.log(add("102-3"))