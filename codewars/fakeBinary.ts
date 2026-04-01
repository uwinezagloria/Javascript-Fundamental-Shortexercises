export const fakeBin = (x:string):string => {
  return x
    .split("")
    .map(d => d < "5" ? "0" : "1")
    .join("");
};