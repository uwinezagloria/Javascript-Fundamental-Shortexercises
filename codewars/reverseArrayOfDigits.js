function digitize(n) {
return n.toString().split("").reverse().map(elem=>Number(elem))
}