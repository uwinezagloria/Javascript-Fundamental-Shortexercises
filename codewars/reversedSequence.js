const reverseSeq = n => {
  var arr=[]
  for(let i=n; i>0;i--){
    arr.push(i)
  }
  return arr
};
reverseSeq(6)