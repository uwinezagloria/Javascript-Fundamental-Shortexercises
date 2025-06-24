//Write a JavaScript program to get the length of a JavaScript object.
var person={
    firstName:"Gloria",
    secondName:"Uwineza",
    gender:"female"
}
var length=0
for(key in person){
length +=1
}
console.log(length)