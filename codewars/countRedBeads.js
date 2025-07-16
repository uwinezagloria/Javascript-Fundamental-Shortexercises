function countRedBeads(n) {
  var red=0;
  if(n<2){
    return 0
  }
  while(n!==1){ 
    red+=2;
     n--
  }
  return red
  
}
countRedBeads(10)