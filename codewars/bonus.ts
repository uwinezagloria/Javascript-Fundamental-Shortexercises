export class Kata {
    public static bonusTime(salary:number, bonus:boolean):string {
      if(bonus){
        salary=salary*10;
        return `£${salary}`
      }
      return `£${salary}`
     } 
}