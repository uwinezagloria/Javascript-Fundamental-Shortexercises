const foldTo=(distance)=> {
  let times=0;
  let thickness=0.0001
  if(distance<0)return null;
  while(thickness<distance){
    thickness*=2
    times ++
  }
  return times
}