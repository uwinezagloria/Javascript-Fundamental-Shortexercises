export class Kata {
  static findLongest(array:number[]):number {
     let longest = array[0]
  let maxDigits = array[0].toString().length

  for (let num of array) {
    let digits = num.toString().length

    if (digits > maxDigits) {
      maxDigits = digits
      longest = num
    }
  }

  return longest
  }
}