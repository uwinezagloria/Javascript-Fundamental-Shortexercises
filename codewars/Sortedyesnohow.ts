export function isSortedAndHow(array: number[]): string {
  let asc = true;
  let desc = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) asc = false;
    if (array[i] > array[i - 1]) desc = false;
  }

  if (asc) return "yes, ascending";
  if (desc) return "yes, descending";

  return "no";
    
}
