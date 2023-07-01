function marriage(party) {
  return new Promise(function (resolve, reject) {
    // for checking the pending status cut the full if condtion and paste in the settimeout function
   console.log("im pending status of promise ")
   setInterval(()=>{ if (party) {
    resolve(" promise is fullfilled ,marriage prty is there");
  } else {
    reject(" promise is rejected marriage party is not there");
  }},4000)
    
  });
}
let success = (a) => {
  console.log(a);
};
let unsucess = (a) => {
  console.log(a);
};
marriage(false).then(success).catch(unsucess);
