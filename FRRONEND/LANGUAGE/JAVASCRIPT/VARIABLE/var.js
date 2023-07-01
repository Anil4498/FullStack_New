/*Users can declare the variable with the same
 name in different blocks using the let keyword*/
var a = 10;
if (true) {
    var a_1 = 20;
    console.log(a_1);
}
console.log(a);
var age = 30;
age = 40;
console.log(age);
/*let year;
year=4498;
console.log(year);
*/
//  const variable can be reassigen it's throw an error beacuse can not be resigen 
var birthday = 2023;
// birthday=2020;
console.log(birthday);
