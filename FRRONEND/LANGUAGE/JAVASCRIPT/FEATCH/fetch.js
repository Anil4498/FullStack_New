// API for get requests
var fetchRes = fetch("https://fakestoreapi.com/products");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(function (res) {
    return res.json();
}).then(function (d) {
    // console.log(d)
    document.write(d);
});
