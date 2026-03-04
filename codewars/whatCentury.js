const whatCentury=(year)=>{
  year=Number(year)
  let century=String(Math.floor((year-1)/100)+1)
  
  if(century[century.length-1] === "1" &&Number(century)>20){
    return century+"st"
  }
  else if(century[century.length-1]==="2" && Number(century)>20){
    return century+"nd"
  }
  else if(century[century.length-1]==="3" && Number(century)>20){
    return century+"rd"
  }
  else{
    return century+"th"
  }
}