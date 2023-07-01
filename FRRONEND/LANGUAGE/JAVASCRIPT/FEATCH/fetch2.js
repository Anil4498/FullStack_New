let  prom =fetch("https://goweather.herokuapp.com/weather/uk")
prom.then(Response=>Response.json())
.then(valve1=>console.log(valve1))


// another example 
async function myfetch(){
    let a=fetch('https://fakestoreapi.com/products')
  a= await (await a).json()
  console.log(a)
}
myfetch()
console.log("example two")