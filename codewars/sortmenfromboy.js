function menFromBoys(arr){
  arr=[...new Set(arr)]
const men=arr.filter((n)=>n%2==0).sort((a,b)=>a-b)
const boy=arr.filter((n)=>n%2==1||n%2===-1).sort((a,b)=>b-a)
return [...men,...boy]
}