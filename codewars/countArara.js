function countArara(n) {
 var arr=[]
  rem=n %2
      while(n>1){
         arr.push("adak") 
        n=n-2
    }
    if(rem!==0){
      arr.push("anane")
    }
    return arr.join(" ")   
}
countArara(6)