/*Users can declare the variable with the same
 name in different blocks using the let keyword*/
let a=10;
if(true){
    let a=20;
    console.log(a)
}
console.log(a);

let age =30;
age=40;
console.log(age);

/*let year;
year=4498;
console.log(year);
*/

//  const variable can be reassigen it's throw an error beacuse can not be resigen 
const birthday=2023;
// birthday=2020;
console.log(birthday);