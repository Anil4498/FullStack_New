/*
// Generate Function generates three 
// different numbers in three calls
function* fun() {
    yield 10;
    yield 20;
    yield 30;
}
  
// Calling the Generate Function
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
*/

// N natural number

function* nextNatural() {
    let naturalNumber = 1;
    while (true) {
        yield naturalNumber++;
    }
}
  

let gen = nextNatural();
for (let i = 0; i < 50; i++) { 
    console.log(gen.next().value);
}