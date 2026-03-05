export function menFromBoys(arr: number[]): number[] {
  let unique = [...new Set(arr)]

  let evens = unique
    .filter(n => n % 2 === 0)
    .sort((a, b) => a - b)

  let odds = unique
    .filter(n => n % 2 !== 0)
    .sort((a, b) => b - a)

  return evens.concat(odds)
}