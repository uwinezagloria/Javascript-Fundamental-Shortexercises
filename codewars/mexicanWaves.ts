export function wave(str: string): Array<string>{
   let result=[];
  let length=0
  while (length !== str.length) {
    if (str[length] !== " ") {
      let before = str.slice(0, length);
      let letter = str[length].toUpperCase();
      let rem = str.slice(length + 1);
      result.push(before + letter + rem);
    }
    length++;
  }
  return result;

}