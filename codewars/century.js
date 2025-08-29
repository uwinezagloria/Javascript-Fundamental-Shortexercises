const century=(year)=>{
 year = String(year).padStart(4, "0");
 return  Number(String(year).slice(-2))>0?Number(String(year).slice(0,2))+1:Number(String(year).slice(0,2));
  }