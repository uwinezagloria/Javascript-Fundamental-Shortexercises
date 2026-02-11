export class Kata {
  static disemvowel(str: string): string {
    let vowels=["a","i","u","e","o"];
    let result:string="";
        for(let elem of str){
          if(!vowels.includes(elem.toLowerCase())){
            result+=elem
          }
        }
    return result;
  }
}