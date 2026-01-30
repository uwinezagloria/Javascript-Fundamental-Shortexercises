export function sameCase(a : string, b : string): number {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) {
    return -1;
  }

  const isAUpper = a === a.toUpperCase();
  const isBUpper = b === b.toUpperCase();

  return isAUpper === isBUpper ? 1 : 0;
}