function numbersWithDigitInside(x, d) {
  var numbers=[]
  var count,sum,product;
  var arr=[];
  for(let i=1;i<=x;i++){
    if(String(i).includes(String(d))){
      numbers.push(i)
    }
  }
  count=numbers.length;
  sum=numbers.reduce((a,b)=>a+b,0);
  product=numbers.reduce((a,b)=>a*b,1);
  arr.push(count,sum,product)
  return  numbers.length === 0?[0,0,0]: arr;
}