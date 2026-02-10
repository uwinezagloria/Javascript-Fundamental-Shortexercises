export function solution(first: number, second: number): [number, number] {

  let a = first;
  let b = second;

  while (true) {
    const prev = b - a;
    if (prev < 0 || prev > a) {
      break;
    }

    b = a;
    a = prev;
  }

  return [a, b];
}