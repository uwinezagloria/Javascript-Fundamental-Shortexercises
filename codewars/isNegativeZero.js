/*ou can detect -0 using division by 1 or checking with 1 / num: */
function isNegativeZero(n) {
return n=== 0 && (1/n === -Infinity )? true:false;
}
