function vaporcode(string) {
  let str="";
   string.split("").forEach((st)=>
                        str+=(st.toUpperCase()))
return str.replace(/\s+/g, "").split("").join("  ")
}