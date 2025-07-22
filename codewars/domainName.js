function domainName(url){
    
   var domain=""
   var rem= url.replace("https://", " ").replace("www."," ").replace("http://"," ")
   for(let i=0;i<rem.length;i++){
    if(rem[i]=='.'){
        break;
    }
   domain +=rem[i]
   }
   return domain
}

console.log(domainName("https://github-ghh.com"))