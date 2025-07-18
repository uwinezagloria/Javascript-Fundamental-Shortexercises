function accum(s) {
	let arr=[];
  for(let i=0;i<s.length;i++){
    var str1=s[i].toLocaleUpperCase();//capitalizing first letter
    var str2=s[i].toLocaleLowerCase().repeat(i);//repeating other letter according to index of letter
    arr.push(str1+str2)//adding str1 and str2 in an array
  }
    return arr.join("-");//returning string with separater
}
console.log(accum("abcd"))//calling a functiont