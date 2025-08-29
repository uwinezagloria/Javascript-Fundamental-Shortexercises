/* heck to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
const XO=(str)=>str.toLowerCase().split("").filter((st)=>st==="o").length ===str.toLowerCase().split("").filter((st)=>st==="x").length?true:false;
