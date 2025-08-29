/* Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.*/
const disariumNumber=(n)=>{
 let num=String(n).split("").map((nbr)=>Number(nbr))
  let sum=0;
  for(let i=0;i<num.length;i++){
   sum+=Math.pow(num[i],(i+1));
  }
  return sum === n ?"Disarium !!": "Not !!"
}