const jumping=(nbr)=>{
nbr=String(nbr).split("").map((num)=>Number(num))
let arr=[]
for(let i=0;i<nbr.length-1;i++){
    if(Math.abs(nbr[i]-nbr[i+1])===1){
    arr.push("Jumping!")
    nbr[i]=nbr[i+1]
    }
    else{
        arr.push("not Jumping!")
    }
}
arr= Array.from(new Set(arr))
return arr.includes("not Jumping!")?"Not Jumping!":"Jumping!";
}
console.log(jumping(345))