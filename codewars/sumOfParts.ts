export function partsSums(ls: number[]): number[] {
    let total = ls.reduce((acc, curr) => acc + curr, 0);
    let result = [total];

    for (let i = 0; i < ls.length; i++) {
        total -= ls[i];
        result.push(total);
    }

    return result;
}