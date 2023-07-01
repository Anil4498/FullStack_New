var add1 = function (a, b) {
    return a + b;
};
function cal(arth) {
    return add1;
}
var add2 = cal("+");
console.log(add2(3, 60));
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.map(function (item) {
    return item * 3;
});
console.log(arr2);
