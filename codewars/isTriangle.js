const isTriangle=(a,b,c)=>{
  if(a>0 && b>0 && c>0){
    const a1=Math.acos(((b*b)+(c*c)-(a*a))/(2*b*c))*180/Math.PI;
  const a2=Math.acos(((a*a)+(c*c)-(b*b))/(2*a*c))*180/Math.PI;
  const a3=Math.acos(((b*b)+(a*a)-(c*c))/(2*b*a))*180/Math.PI;
    if (a1 >= 180 || a2 >= 180 || a3 >= 180) return false;
   return Math.round(a1+a2+a3)===180?true:false; 
  }  
else{
  return false;
}
}