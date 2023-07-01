


function prom(meating){
 return new Promise(function(resolve,reject){
    console.log("promise is pending")
    setTimeout(()=>{
        if(meating){
            resolve("promise is fullfiled")
        }else{
            reject("promise is rejected")
        }
    },4000)
   
})}


let success=(done)=>{
    console.log(done)
}
let unsucess=(failed)=>{
    console.log(failed)
}
prom(true).then(success).catch(unsucess)