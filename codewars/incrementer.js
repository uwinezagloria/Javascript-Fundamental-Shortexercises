function incrementer(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i] + (i + 1);
    if (value > 9) {
      value = value % 10;
    }
    result.push(value);
  }
  return result;
}