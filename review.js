console.log("5"-3)
console.log(typeof(null));
console.log(typeof(NaN));
console.log(isNaN(undefined))
console.log(isNaN("123"))
console.log(isNaN(null))
if(true){
var a=5
let b=4
const c=10
}
console.log(a) // output: 5 beacuse var is not a block scope 
function student(name,age){
this.name=name;
this.age=age;
}
var person=new student("uwineza",21)
console.log(person)
var obj=new Object()
obj.name="uwineza"
console.log(obj)
console.log(NaN===NaN)
console.log(undefined === undefined)
console.log(null == undefined)
console.log(NaN==NaN)
console.log(undefined == undefined)
console.log(Number("123.89"))
console.log(parseInt("23.9"))
console.log(parseFloat("23.6"))
console.log(+("44"))
console.log(String(200))
console.log((11).toString())
console.log(true.toString())
console.log(!"")
let a=4;
a="uwineza"
var c=3;
var c=6;
var arr=[1,12,3]
var sum=arr.reduce((curr,acc)=>{return acc+curr})
console.log(sum)