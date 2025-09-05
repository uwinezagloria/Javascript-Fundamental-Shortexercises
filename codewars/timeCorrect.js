const timeCorrect=(timestring)=> {
   if (timestring === "") return "";
 if (timestring === null ||timestring[2] !== ":" || timestring[5] !== ":") return null;
 

 let arr = timestring.split(":");
  if(arr.length !== 3){
    return null
  }
 console.log(arr)
let hours = Number(arr[0]);
let minutes = Number(arr[1]);
let seconds = Number(arr[2]);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;

  if(seconds>=60){
    minutes+=Math.floor(seconds/60)
    seconds=seconds %60
  }
  if(minutes>=60){
    hours+=Math.floor(minutes/60)
    minutes=minutes%60
    
  }
  hours=hours % 24
  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0")
  );
}