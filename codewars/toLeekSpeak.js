function toLeetSpeak(str) {
  const characters={ A : '@', B : '8',C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', Y : 'Y', Z : '2'
}
str= str.toUpperCase()
  let  result="";
  for(let i of str){
     if(i === " "){
        result +=i
      }
    for(let char in characters){
      if( i === char){
        result+=characters[char]
      }
    }
  }
  return result
}