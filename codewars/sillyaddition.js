function add(num1, num2) {
  let n1 = String(num1).split("");
  let n2 = String(num2).split("");

  // Pad shorter number with zeros
  while (n1.length < n2.length) n1.unshift("0");
  while (n2.length < n1.length) n2.unshift("0");

  let result = "";

  for (let i = 0; i < n1.length; i++) {
    result += String(Number(n1[i]) + Number(n2[i]));
  }

  return Number(result);
}
