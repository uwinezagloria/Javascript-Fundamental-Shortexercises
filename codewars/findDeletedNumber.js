function findDeletedNumber(arr, mixArr) {
 var result= arr.filter((item)=>!mixArr.includes(item))
return result.length !== 0? result[0]:0
}