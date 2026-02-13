
export class Kata {

  static highAndLow(numbers: string): string {

    // throw new NotImplementedException() ?

    // No, wait, this is TypeScript.

    let arr=numbers.split(" ").map(Number)

    let max=String(Math.max(...arr))

    let min=String(Math.min(...arr))

    return max+" "+min

​

  }
}
 