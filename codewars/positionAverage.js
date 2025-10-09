function posAverage(s) {
  const arr = s.split(',').map(x => x.trim());
  const len = arr[0].length;
  let count = 0;
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < len; k++) {
        if (arr[i][k] === arr[j][k]) {
          count++;
        }
        total++;
      }
    }
  }
  return +((count / total) * 100).toFixed(10);
}