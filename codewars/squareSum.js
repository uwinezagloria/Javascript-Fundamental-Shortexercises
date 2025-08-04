function squareSum(numbers){
return numbers.map((num)=>num*num).reduce((acc,curr)=>acc+curr,0)
}