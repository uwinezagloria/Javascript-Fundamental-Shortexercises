function positiveSum(arr) {
  return arr.filter((element)=> element>0).reduce((curr,acc)=> curr+acc,0)
}