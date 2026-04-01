export function maxRot(n: number): number {
 let str = n.toString();
  let max = n;

  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    max = Math.max(max, Number(str));
  }

  return max;
}